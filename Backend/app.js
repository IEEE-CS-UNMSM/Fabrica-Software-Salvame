import morgan from 'morgan';
import express, { json } from 'express';
import register from './routes/register.routes.js'
import login from './routes/login.routes.js'
import alert from "./routes/alertas.routes.js"
import animal from "./routes/animal.routes.js"
import { engine } from 'express-handlebars';
import session from 'express-session';
import bodyParser from 'body-parser';


const app = express();

app.use(morgan());
app.use(express.json());

app.get('/', async(req, res)=>{
    res.sendStatus(200);
})

app.use(register);
app.use(login);
app.use(alert);
app.use(animal)

// Middleware del parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware para el tipo de session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});