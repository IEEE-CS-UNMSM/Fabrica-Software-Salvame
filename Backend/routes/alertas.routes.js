import { viewAlert } from '../controllers/alerta.controller.js';
import {pool} from '../db.js';
import { Router } from 'express';

const router = Router();

router.get("/view-alert-all", viewAlertAll);
router.get("/view-alert-all", viewAlert)
export default router;