import { pool } from '../../models/db.config.js';
import { Router } from 'express';
import { logout } from '../../controllers/user/logout.controller.js';

const router = Router();

// Configura la ruta POST para el inicio de sesión en /logout
router.get('/', logout);

export default router;