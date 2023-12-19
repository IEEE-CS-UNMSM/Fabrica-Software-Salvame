import { pool } from "../db.config.js";

export const createUser = async (userCreate) => {
    const connection = await pool.getConnection();
 
    try {
       await connection.execute('CALL crear_usuario_basico(?, ?, ?, ?, ?)', [
          userCreate.nombres,
          userCreate.apellidos,
          userCreate.correo,
          userCreate.contraseña,
          userCreate.fechaNac
       ]);
 
       return { message: 'Usuario creado exitosamente' };
    } catch (error) {
       console.error(error);
       throw error; // Re-lanzar el error para que pueda ser manejado en el controlador
    } finally {
       connection.release();
    }
 };
 