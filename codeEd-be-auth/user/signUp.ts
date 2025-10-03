import  { type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPass } from '../Helpers/hash_pass.js';


export const userController ={

    // change to trpc later

    signUp : async(req:Request,res:Response)=>{

        
        const {userName , passWord} = req.body

        const saltedPassWord = await hashPassword(passWord);

        console.log(saltedPassWord)
        
        const yesNo = await verifyPass('')
        console.log(yesNo)
        // const JwtKey = process.env.JWT_SECRET_KEY || ''
        // const JWTRefreshToken = process.env.JWT_REFRESH_TOKEN || ''

        // // early exit if issue in jwt
        // if(JwtKey === '')
        //     res.send(400)

        // const accessToken = jwt.sign(userName , JwtKey)
        // console.log(accessToken)
        // res.json({
        //     accessToken,
        //     status:200
        // })
    }
}