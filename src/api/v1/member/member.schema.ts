import Joi from 'joi';
import { Validator } from 'middlewares/validator';

const getMembers: Validator = {
    query: {
        page: Joi.number().min(1).required(),
        limit: Joi.number().min(1).max(20).required(),
    },
};

export { getMembers };
