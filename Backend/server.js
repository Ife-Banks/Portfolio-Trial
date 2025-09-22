import express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 0;

app.get("/Instagram/api", (req, res)=>{
    res.send("Get Instagram feed");
})

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
})