import express, { Request, Response } from "express";
import cors from "cors";
import { createUserEndpoint } from "./endpoints/createUser";
import { LoginEndpoint } from "./endpoints/login";

const app = express()

app.use(cors());
app.use(express.json());



app.post("/createUser", createUserEndpoint)
app.post("/login", LoginEndpoint)

export default app;