import  express, { Response, Request }  from "express";
import * as path from 'path';
import userRouter from "./router/userRouter"

const app = express();

app.use(express.json());
app.use(userRouter);

app.set('views', path.join(process.cwd(), 'src/vue'));
app.set('view engine', 'ejs');

app.use('/bootstrap', express.static(path.join(process.cwd(), 'node_modules/bootstrap/dist/css')));

app.use('/public', express.static(path.join(process.cwd(), '/src/public')));


app.listen(3001, () => {
    console.log("serveur lancé sur le port 3001");
    
})

