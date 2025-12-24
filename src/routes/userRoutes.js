import express from 'express';
import { updateUserAvatar } from '../controllers/userController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.patch('/users/me/avatar', authenticate, updateUserAvatar);

export default router;
