import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './group.controller';

const group: Router = Router();
const controller = new Controller();

// Retrieve all Users
group.post('/create', verifyToken, controller.create);
group.post('/update', verifyToken, controller.update);
group.get('/list', verifyToken, controller.getJoinedGroups);

export default group;
