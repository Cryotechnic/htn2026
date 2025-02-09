import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

app.get("/api/events", async (req, res) => {
    try {
        const response = await axios.get(process.env.API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch events" });
    }
});

app.listen(4000, () => console.log(`Proxy server running on port 4000`));
