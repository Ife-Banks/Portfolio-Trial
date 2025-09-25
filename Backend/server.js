import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors()); // ✅ allow frontend to call backend

app.get("/api/instagram-feed", async (req, res) => {
  try {
    const response = await fetch(
  `${process.env.IG_API_URL}?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url,thumbnail_url}`
);

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch Instagram feed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
