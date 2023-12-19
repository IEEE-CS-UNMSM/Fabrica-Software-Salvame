import { Router } from "express";
import { viewAllMarker, viewMarkermap } from "../controllers/marker.controller";

const router = Router();


//ubicacion fecha
//1ro por fecha
router.post("/ver-alertas", viewMarkermap)
router.get("/ver-alertas",viewAllMarker)


export default router;