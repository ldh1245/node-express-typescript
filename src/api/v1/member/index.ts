import { Router } from 'express';
import validator from 'middlewares/validator';
import * as schema from './member.schema';
import * as memberController from 'controllers/member.ctrl';

const memberRouter = Router();

memberRouter.get('/', validator(schema.getMembers), memberController.getMembers);

export default memberRouter;
