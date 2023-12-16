import { pool } from "../models/db.config.js";
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const getUser = async (correo) => {
    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.execute('CALL GetUserByCorreo(?)', [correo]);
        return rows[0];
    } finally {
        connection.release(); // Release the connection back to the pool
    }
};

export const login = async (req, res) => {
    const {correo, contrasenia} = req.body;

    try {
        const user = await getUser(correo);

        const userObject = user[0];

        // Create a payload object with the correct property names
        const userPayload = {
            userId: userObject.idPerfilUsuario,
            userNombres: userObject.nombres,
            userApellidos: userObject.apellidos,
            userCorreo: userObject.correo,
            userContrasenia: userObject.contraseña,
            userFN: userObject.fechaNac
        };

        if (user.contraseña != contrasenia) {
            return res.status(401).json({
                message: 'Login inválido' 
            });
        }

        delete user.contraseña;
        console.log('JWT: ', process.env.JWT_SECRET);
        console.log('user: ', userPayload.userId);
        const token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: '1h' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            //secure: true,
            //maxAge: 1000000,
            //signed: true
        });

        return res.redirect(`/${userPayload.userId}`);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
