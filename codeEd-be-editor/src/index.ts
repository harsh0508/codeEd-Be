import express, { type Request, type Response , Router } from 'express';
// import { userController } from '../user/signUp.js';
import dotenv from 'dotenv';
import { connectDB } from './DB/index.js';
import { connectRedis } from './Redis/index.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3005;
const router  =  Router();
app.use(express.json())
// Register the router with the app
app.use(router);

async function startServer(){
    await connectDB();
    await connectRedis();
    app.get('/', (_req, res) => {
        res.send('Hello from TypeScript Node.js Server!');
    });

    // router.post('/user/signUp', userController.signUp);


    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

startServer()



