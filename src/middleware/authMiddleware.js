// authMiddleware.js
import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/Sections/auth.html'); 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Continúa con la ejecución del siguiente middleware o ruta
  } catch (error) {
    return res.redirect('/Sections/auth.html');
  }
};

export default authenticateUser;
