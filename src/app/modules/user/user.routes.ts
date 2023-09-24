import express from 'express';
import { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { fileUploaderhealper } from '../../../helpers/fileUploderHelper';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  fileUploaderhealper.uploder.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createUser.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const userRotes = router;
