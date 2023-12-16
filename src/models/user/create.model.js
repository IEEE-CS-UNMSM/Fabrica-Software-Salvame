import { pool } from "../db.config.js";

export const createUser = async (userData) => {
    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.execute('CALL crear_usuario_basico(?, ?, ?, ?, ?)', [
            userData.nombres,
            userData.apellidos,
            userData.correo,
            userData.contraseña,
            userData.fechaNac
        ]);

        return rows[0]; // Assuming the procedure returns some data
    } finally {
        connection.release();
    }
};