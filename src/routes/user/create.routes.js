import express from 'express';
import { createUserController } from '../../controllers/user/register.controller.js';
const router = express.Router();

router.post('/', createUserController);

export default router;
