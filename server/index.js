import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

// The Routes connections
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

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