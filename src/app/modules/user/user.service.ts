import { NextFunction, Request, Response } from 'express';
import { AuthService, CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';
import { FileUploadHelper } from '../../../helpers/fileUploderHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  console.log(file);

  const uplodeImage = await FileUploadHelper.uploadToCloudinary(file);
  console.log(uplodeImage);

  if (uplodeImage) {
    req.body.profileImage = uplodeImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  //

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  console.log(Array.isArray(academicFacultyResponse.data));

  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }
  console.log('new body', req.body);

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createStudent
};
