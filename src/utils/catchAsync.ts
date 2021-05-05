import { RequestHandler } from 'express';

const catchAsync: (fn: RequestHandler) => RequestHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default catchAsync;
