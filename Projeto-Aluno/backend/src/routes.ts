import { Router, request, Request, response, Response } from 'express';

import { getStudents, saveStudent, getStudent, updateStudent, deleteStudent, registeredStudent } from './controller/StundentsController';

const routes = Router();

routes.get('/students', getStudents);
routes.post('/students', saveStudent);
routes.get('/students/:id', getStudent);
routes.put('/students/:id', updateStudent);
routes.delete('/students/:id', deleteStudent);
routes.patch('/students/:id', registeredStudent);

export default routes;