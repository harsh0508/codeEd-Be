    import express, { type Request, type Response , Router } from 'express';
import { userController } from '../user/signUp.js';

    const app = express();
    const port = process.env.PORT || 3000;
    const router  =  Router();

    app.get('/', (_req, res) => {
      res.send('Hello from TypeScript Node.js Server!');
    });

    router.get('/user/signUp', userController.signUp);

    // Register the router with the app
    app.use(router);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });