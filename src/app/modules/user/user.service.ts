import { Request } from 'express';

const createStudent = async (req: Request) => {
  console.log(req);
};

export const UserService = {
  createStudent
};
