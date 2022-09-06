import express from "express";

import { usersRoutes } from "./routes/users.routes";

import  swaggerUi  from 'swagger-ui-express';

import SwaggerFile from '../swagger.json'
const app = express();



app.use(express.json());

app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(SwaggerFile))
app.use("/users", usersRoutes);

export { app };
