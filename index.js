import express from 'express';
const app = express();
import dotenv  from 'dotenv';
dotenv.config();

//import importent middleware and route
import errorMiddleware from './middlewares/errorMiddleware.js';
import routes from './routes/indexRoutes.js';


//middlewares
app.use(express.json());

//routes handaler
app.use('/api/v1/', routes);

//global middleware
app.use(errorMiddleware);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3030;
app.listen( PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});