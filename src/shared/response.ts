import { Response } from 'express';

interface IResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: any;
}

const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message?: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T;
  }
) => {
  const response: IResponse = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || 'Success',
    meta: data.meta,
    data: data.data || null
  };
  console.log(response);

  res.status(data.statusCode).json(response);
};

export default sendResponse;
