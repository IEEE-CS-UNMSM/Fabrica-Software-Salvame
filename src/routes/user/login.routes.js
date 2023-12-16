import { pool } from '../../models/db.config.js';
import { Router } from 'express';
import { login } from '../../controllers/user/login.controller.js';

const router = Router();

// Configura la ruta POST para el inicio de sesión en /login
router.post('/', login);

export default router;
