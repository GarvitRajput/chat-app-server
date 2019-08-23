import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './user.controller';

const user: Router = Router();
const controller = new Controller();

// Retrieve all Users
user.get('/profile', verifyToken, controller.getProfile);
user.post('/update-profile', verifyToken, controller.updateProfile);
user.get('/active-users', verifyToken, controller.activeUsers);

export default user;
