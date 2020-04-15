import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './file.controller';

const file: Router = Router();
const controller = new Controller();

// Retrieve all Users
file.post('/upload', verifyToken, controller.post);
file.get('/get/:id/:name', controller.get);

export default file;
