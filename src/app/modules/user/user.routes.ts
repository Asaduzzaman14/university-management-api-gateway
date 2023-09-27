import express from 'express';
import { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import { FileUploadHelper } from '../../../helpers/fileUploderHelper';

const router = express.Router();

router.post(
  '/create-student',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createUser.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const userRotes = router;
