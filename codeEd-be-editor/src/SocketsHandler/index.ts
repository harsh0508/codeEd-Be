import dotenv from 'dotenv';
dotenv.config();

export const socket =  new WebSocket(`ws://localhost:${process.env.WS_HOST_PORT}`)