import express from "express";
import bodyParser from "body-parser";
import {adminProductRouter} from "@app/routes/admin/admin.routes";

export const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/v1/admin",adminProductRouter);