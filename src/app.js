import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import session from 'express-session';
import url from 'url';

import register from './routes/register.routes.js';
import loginRoutes from './routes/login.routes.js';
import alertsRoutes from './routes/api/index.routes.js';
import informesRouter from './routes/informes.routes.js';

const app = express();
app.use(morgan('combined'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

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
app.use('/informes', informesRouter);
app.use('/api', alertsRoutes);


//falta autentificar, el :userId aún no se reconoce en el header
//falta el middle que autentifique
app.get('/:userId/', (req, res) => {
    const userPath = path.resolve(__dirname, '../public', 'Sections', 'user', 'index.html');
    res.sendFile(userPath);
});

//falta autentificar, el :userId aún no se reconoce en el header
//falta el middle que autentifique
app.get('/:userId/mis-alertas', (req, res) => {
    const misAlertasPath = path.resolve(__dirname, '../public', 'Sections', 'user', 'mis-alertas.html');
    res.sendFile(misAlertasPath);
});

app.use(register);
app.use(login);

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
