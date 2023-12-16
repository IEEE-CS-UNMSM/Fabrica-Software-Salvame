import {pool} from '../db.js';
import { Router } from 'express';
import {viewAnimal} from '../controllers/animal.controller.js';

router.get("/animal", viewAnimal)
const router = Router();
export default router;