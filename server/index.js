import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());

app.use(express.json({ limit: '50mb' }));

//Routes
app.get( '/', async (req, res) => {
    res.send('Welcome to Dall-E Ai');
})


//Note '8080' is the PORT of the application
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen( 8080, () => console.log('Server has started and is runnning on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    } 
};

startServer();