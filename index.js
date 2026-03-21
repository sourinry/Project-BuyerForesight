import express from 'express';
const app = express();
import dotenv  from 'dotenv';
dotenv.config();



app.use(express.json());
// app.use('/api/v1/', );
app.get('/', (req,res)=>{
    res.send(`hello from server!`);
})

const PORT = process.env.PORT ? Number(process.env.PORT) : 3030;
app.listen( PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});