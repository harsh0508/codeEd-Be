import  { type Request, type Response } from 'express';


export const userController ={


    signUp : (req:Request,res:Response)=>{
        res.send("this is for signup new")
    }
}