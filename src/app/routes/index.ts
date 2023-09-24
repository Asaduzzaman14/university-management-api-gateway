import { academicFacultyRoutes } from './../modules/academicFaculty/academicFaculty.roures';
import express from 'express';
import { academicSemesterRoures } from '../modules/academicSemester/academicSemester.roures';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { roomRoutes } from '../modules/room/room.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemesterRoures
  },
  {
    path: '/academic-facultyes',
    routes: academicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
