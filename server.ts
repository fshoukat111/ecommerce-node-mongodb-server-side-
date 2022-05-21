import { app } from "./app";
import {databaseConnection} from "@app/config/database";

databaseConnection();
app.listen(7000,() => {});