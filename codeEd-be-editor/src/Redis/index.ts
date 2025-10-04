import { createClient } from 'redis';
import dotenv from "dotenv";

dotenv.config();

const redis = createClient({
    url: `redis://${process.env.REDIS_ENDPOINT}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASS
});

redis.on("error", (err) => console.error("Redis Client Error", err));

export async function connectRedis(){
    try {
        await redis.connect();
        console.log(" Connected to Redis");
        return redis; // return client if you want to use it elsewhere
    } catch (error) {
        console.error(" Redis connection failed:", error);
        process.exit(1); // stop server if redis is critical
    }
}

export {redis};