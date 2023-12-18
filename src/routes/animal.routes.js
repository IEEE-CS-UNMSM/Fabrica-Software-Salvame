import {pool} from '../models/db.config.js';
import { Router } from 'express';
import {allAnimal, viewAnimal} from '../controllers/animal.controller.js'
const router = Router();

router.post('/animal', viewAnimal);
router.get("/animal", allAnimal)

export default router

