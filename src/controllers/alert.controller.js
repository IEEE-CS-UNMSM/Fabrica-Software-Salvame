import { pool } from '../models/db.config.js';

export const getAlerts = async (req, res) => {
    try {
        const [results] = await pool.query('CALL VisualizarEstadoAlertas("77354147")');
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las alertas');
    }
};


