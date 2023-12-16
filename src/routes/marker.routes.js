import { Router } from "express";
import { viewMarkermap } from "../controllers/marker.controller";

const router = Router();


//ubicacion fecha
//1ro por fecha
router.post("/ver-alertas", viewMarkermap)


export default router;