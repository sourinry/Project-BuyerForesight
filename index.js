import 'dotenv/config'; 

import express from 'express';
const app = express();

//import middleware & routes
import errorMiddleware from './middlewares/errorMiddleware.js';
import routes from './routes/indexRoutes.js';

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/', routes);

//error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3030;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});