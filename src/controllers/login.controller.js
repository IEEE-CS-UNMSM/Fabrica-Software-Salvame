import { pool } from "../models/db.config.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const [result] = await pool.query(`SELECT * FROM usuario_basico WHERE correo = ?;`, [correo]);

        if (result.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const user = result[0];

        if (user.contraseña !== password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: user.idPerfilUsuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login exitoso', token, userId: user.idPerfilUsuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
