import { createUser } from '../../models/user/create.model.js';

export const createUserController = async (req, res) => {
    const userData = req.body;

    try {
        const result = await createUser(userData);

        if (result) {
            return res.status(201).json({ message: 'Usuario creado exitosamente' });
        } else {
            return res.status(500).json({ message: 'Error al crear el usuario' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};
