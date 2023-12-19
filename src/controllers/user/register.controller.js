import { createUser } from '../../models/user/create.model.js';

export const createUserController = async (req, res) => {
    console.log('Request Body:', req.body); // Para depurar
    const userData = req.body;

    // Aquí se asume que los nombres de las propiedades son correctos
    const userCreate = {
        nombres: userData.nombre,
        apellidos: userData.apellido,
        correo: userData.correo,
        contraseña: userData.password,
        fechaNac: `${userData['año']}-${userData.mes}-${userData.dia}`

    }
    console.log('User Data to be Created:', userCreate);

    try {
        const result = await createUser(userCreate);
        console.log('Resultado:', result); // Resultado de la operación
        if (result) {
            return res.status(201).json({ message: 'Usuario creado exitosamente' });
        } else {
            return res.status(500).json({ message: 'Error al crear el usuario' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};
