import express from 'express';

import cors from 'cors';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import session from 'express-session';

import url from 'url';

import loginRoutes from './routes/user/login.routes.js';
import logoutRoutes from './routes/user/logout.routes.js';
import signinRoutes from './routes/user/create.routes.js';
import alertsRoutes from './routes/api/index.routes.js';
import informesRouter from './routes/informes.routes.js';
import authenticateUser from './middleware/authMiddleware.js';

const app = express();


app.use(cors());

app.use(morgan('combined'));
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(cookieParser());

app.engine('html', engine());
app.set('view engine', 'html');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    const indexPath = path.resolve(__dirname, '../public', 'index.html');
    res.sendFile(indexPath);
});

app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/signin', signinRoutes);
app.use('/informes', informesRouter);
app.use('/api', alertsRoutes);

app.get('/auth-log', authenticateUser,  (req, res, next) => {
    const userData = {
        userId: req.user.userId,
        nombres: req.user.userNombres
    }
    res.send(userData);
});

app.get('/user/:userId/', authenticateUser, (req, res) => {
    const userId = req.user.userId;
    const userPath = path.resolve(__dirname, '../public', 'Sections', 'user', 'index.html');
    res.sendFile(userPath);
});

app.get('/user/:userId/mis-alertas',authenticateUser, (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'user', 'mis-alertas.html');
    res.sendFile(misAlertasPath);
});

app.get('/crear-alerta', (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'CrearAlerta.html');
    res.sendFile(misAlertasPath);
});

app.get('/crear-alerta-anonima', (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'AlertaNoLogin.html');
    res.sendFile(misAlertasPath);
});

app.get('/ver-alertas', (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'verAlerta.html');
    res.sendFile(misAlertasPath);
});

app.get('/ver-informe', (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'informe.html');
    res.sendFile(misAlertasPath);
});


app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
