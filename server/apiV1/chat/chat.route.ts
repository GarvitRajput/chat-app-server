import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './chat.controller';

const chat: Router = Router();
const controller = new Controller();

// Retrieve all Users
chat.get('/list', verifyToken, controller.getAvailableChats);
chat.post('/messages', verifyToken, controller.getChatMessages);

export default chat;
