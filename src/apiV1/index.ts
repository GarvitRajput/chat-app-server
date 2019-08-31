import { Router } from 'express';
import auth from './auth/auth.route';
import users from './users/user.route';
import group from './group/group.route';
import chat from './chat/chat.route';
import meta from './meta/meta.route';

const router: Router = Router();

router.use('/', auth);
router.use('/user', users);
router.use('/group', group);
router.use('/chat', chat);
router.use('/metadata', meta);

export default router;
