import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';
import { Request } from 'express';

const inserIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-faculties', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const params = req.params;
  const response: IGenericResponse = await HttpService.get('/academic-faculties', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateInToDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;

  const response: IGenericResponse = await HttpService.patch(
    `/academic-faculties/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.get(`/academic-faculties/${id}`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteFacultyById = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;

  const response: IGenericResponse = await HttpService.delete(`/academic-faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicFaculties = {
  inserIntoDB,
  getAllFromDB,
  updateInToDB,
  getByIdFromDB,
  deleteFacultyById
};
