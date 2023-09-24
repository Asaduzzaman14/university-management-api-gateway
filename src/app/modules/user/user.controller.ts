import { NextFunction, Request, Response } from 'express';

import { fileUploaderhealper } from '../../../helpers/fileUploderHelper';

const createStudent = async (req: Request, res: Response, Next: NextFunction) => {
  console.log(req.file, req.data);

  // fileUploaderhealper.uplodeToCloudunary();
};

export const UserController = {
  createStudent
};
