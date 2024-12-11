import express from 'express';  
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import path from 'path'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoURL = 'mongodb+srv://glennmarkculibra:glennmarkculibra09@book-app.kvax9.mongodb.net/?retryWrites=true&w=majority&appName=Book-App'

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  app.use(express.static(path.join(__dirname, "client/build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
  

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
