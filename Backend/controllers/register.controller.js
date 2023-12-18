import { pool } from "../db.js";

export const  saveUser = async (req, res)=>{
    const {nombres,apellidos,correo, password,fecha} = req.body;
    console.log(correo, password);
    //roles
    //moderador, suscriptor, basic
    try {
        // Intenta realizar la inserción en la base de datos
        await pool.query("INSERT INTO perfil_usuario VALUES ('basico')");
        const [id] = await pool.query("SELECT idPerfilUsuario FROM perfil_usuario ORDER BY idPerfilUsuario DESC LIMIT 1;");
        const saveIn = id[0].idPerfilUsuario;
       const hashedPassword = await bcrypt.hash(password, 10);
await pool.query(`INSERT INTO usuario_basico VALUES (null, ${saveIn}, '${nombres}', '${apellidos}','${correo}', '${hashedPassword}', '${fecha}')`);
        console.log(id[0].idPerfilUsuario);
        res.send("Usuario registrado");
      } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error interno del servidor");
      }
    //res.redirect('path'); //vista de la pagina principal
}