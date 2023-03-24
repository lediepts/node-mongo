import * as dotenv from "dotenv";
dotenv.config();
import "./database";
import server from "./server";

const PORT: number = parseInt(process.env.PORT as string, 10);

server.start(PORT || 3333);
