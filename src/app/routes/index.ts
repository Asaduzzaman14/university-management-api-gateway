import express from 'express';
import { academicSemesterRoures } from '../modules/academicSemester/academicSemester.roures';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: academicSemesterRoures
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
