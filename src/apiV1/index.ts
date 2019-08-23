import { Router } from 'express';
import auth from './auth/auth.route';
import users from './users/user.route';
import group from './group/group.route';

const router: Router = Router();

router.use('/', auth);
router.use('/user', users);
router.use('/group', group);

export default router;
