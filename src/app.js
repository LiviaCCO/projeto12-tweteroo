import express from "express";
import cors from "cors";

const app = express() // app do servidor

app.use(cors());

app.get("/tweets", (request, response) => {
    const tweets = [];
    response.send(tweets)
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

