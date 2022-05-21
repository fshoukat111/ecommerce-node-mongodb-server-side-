import mongoose from "mongoose";
import { ConnectOptions } from "mongodb";

export const databaseConnection = () => {
    mongoose.connect('mongodb://localhost:27017/ecommerce_db',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    } as ConnectOptions).then((data:any) => {})
}