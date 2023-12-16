import {pool} from '../models/db.config.js';
import { Router } from 'express';
import {viewAnimal} from '../controllers/animal.controller.js'
const router = Router();

router.post('/animal', viewAnimal);

export default router

