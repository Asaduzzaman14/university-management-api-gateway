import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFaculties } from './academicFaculty.service';

const inserIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFaculties.inserIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFaculties.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFaculties.updateInToDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFaculties.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFaculties.deleteFacultyById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  inserIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB
};
