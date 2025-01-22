import { Server } from "./server";
import { Database } from "./database";

export const server = new Server();
export const database = new Database();

server.start();
database.connect();
