import { CoreService as httpService } from '../../../shared/axios';

const inserIntoDB = async (req) => {
  console.log(req.body);

  const response = await httpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  inserIntoDB
};
