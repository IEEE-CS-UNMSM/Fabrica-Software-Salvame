import { pool } from '../models/db.config.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getAlerts = async (req, res) => {
    try {
        // Obtener el token de la cookie llamada 'token'
        const token = req.cookies.token;

        // Verificar y decodificar el token para obtener la información del usuario
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Obtener el ID de usuario del token decodificado
        const userDNI = decodedToken.userDNI;

        console.log('DNI: ', userDNI);

        // Llamar a la función almacenada con el ID como parámetro
        const [results] = await pool.query('CALL VisualizarEstadoAlertas(?)', [userDNI]);

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las alertas');
    }
};



