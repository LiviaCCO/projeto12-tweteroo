import express from "express";
import cors from "cors";

const app = express() // app do servidor

app.use(cors());

const user = [{
	username: 'bobesponja', 
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
}];
const tweets = [];

app.get("/tweets", (req, res) => {
    res.send(tweets)
});

app.use(express.json());

app.post('/sign-up', (req, res) => {
    //console.log(req.params)
    user.push(req.params);
    res.send(console.log("Ok", user));
});

app.post('/tweets', (req, res) => {
    if(user===[]){
        res.send(console.log("UNAUTHORIZED"));;
    }
    tweets.push(req.params);
    res.send(console.log("Ok", tweets));
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

