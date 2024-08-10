// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import formRoutes from './routes/formRoutes';
import ConnectDB from './config/db';

const app: Application = express();
const PORT = process.env.PORT ?? 5006;

// Middleware
app.use(cors());
app.use(express.json());

app.options(
    "*",
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

// Routes
app.use('/api/forms', formRoutes);

// Connect to MongoDB and start the server
ConnectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
