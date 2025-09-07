import  { type Request, type Response } from 'express';
import * as jwt from 'jsonwebtoken';


export const userController ={


    signUp : (req:Request,res:Response)=>{
        const userName = req.body.userName
        const passWord = req.body.passWord

        const JwtKey = process.env.JWT_SECRET_KEY
        if(JwtKey){
            jwt.sign(userName , JwtKey)
        }
        res.send("this is for signup new")
    }
}