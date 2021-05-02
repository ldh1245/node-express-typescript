import { RequestHandler } from 'express';
import catchAsync from 'utils/catchAsync';

export const getMembers: RequestHandler = catchAsync(async (req, res) => {
    res.send(['a', 'b']);
});
