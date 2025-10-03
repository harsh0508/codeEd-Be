import express, { type Request, type Response , Router } from 'express';
import { userController } from '../user/signUp.js';
import dotenv from 'dotenv';
import pkg from 'pg'
import { connectDB } from '../DB/index.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const router  =  Router();
app.use(express.json())
// Register the router with the app
app.use(router);

async function startServer(){
    await connectDB();
    app.get('/', (_req, res) => {
        res.send('Hello from TypeScript Node.js Server!');
    });

    router.post('/user/signUp', userController.signUp);


    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

startServer()



