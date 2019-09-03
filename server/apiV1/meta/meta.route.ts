import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './meta.controller';

const meta: Router = Router();
const controller = new Controller();

// Retrieve all Users
meta.post('/get', verifyToken, controller.fetchMetaData);

export default meta;
