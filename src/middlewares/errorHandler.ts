import { ErrorRequestHandler, RequestHandler } from 'express';
import httpStatus from 'http-status';
import ApiError from 'utils/ApiError';
import config from 'config';
import { logger } from 'utils/logger';
const { ENV } = config;

const errorConverter: ErrorRequestHandler = (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode, message, err.stack);
    }
    next(error);
};

const errorHandler: ErrorRequestHandler = (err: ApiError, req, res, next) => {
    let { statusCode, message } = err;

    if (statusCode === undefined) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR] as string;
    }

    const response = {
        code: statusCode,
        message,
        ...(ENV !== 'production' && { stack: err.stack }),
    };

    if (ENV !== 'production') {
        logger.error(err);
    }

    res.status(statusCode).send(response);
};

const notFound: RequestHandler = (req, res, next) => {
    const error = new ApiError(httpStatus.NOT_FOUND, httpStatus[httpStatus.NOT_FOUND] as string);

    return errorHandler(error, req, res, next);
};

export { errorConverter, errorHandler, notFound };
