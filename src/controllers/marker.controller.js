import { pool } from '../models/db.config.js';

export const viewAllMarker = async (req, res) =>{
    //todas las ubicaciones
    const [coords] = await pool.query("select * from ubicacion")
   res.send(coords);
}

export const viewMarkermap = async (req, res) => {
    let {departamento} = req.body
    const [result] = await pool.query(`select * from ubicacion where departamento = '${departamento}'`)
    res.send(departamento)
}