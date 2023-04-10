import express from "express";
import cors from "cors";

const app = express() // app do servidor

app.use(cors());
app.use(express.json());

/* const user = [{
	username: 'bobesponja', 
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
}];
 */
const users = [];

const tweets = [];

app.get("/tweets", (req, res) => {
    res.send(tweets)
});

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;

    if(!username || !avatar || (typeof username !== 'string') || (typeof avatar !== 'string')){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }
    const newUser={
        username,
        avatar
    }
    users.push(newUser);
    res.status(201).send(console.log("Ok", users));
});

app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;
    const user = users.find((u)=> u.username === username);

    if(!username || !tweet || (typeof username !== 'string') || (typeof tweet !== 'string')){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }
    else if(!user){
        return res.status(401).send('UNAUTHORIZED');
    }
    else{
        const newTweet = {
            username,
            avatar: user.avatar,
            tweet
        } 
        if(tweets.length===10){
            tweets.shift();
        }
        tweets.push(newTweet);
        res.status(201).send(console.log("Ok", tweets));
    }
});

app.get('/tweets/:USERNAME', (req, res) => {
    const {USERNAME} = req.params;
    const tweetsUser = [];
    for(let i=0; i<tweets.length; i++){
        if(tweets[i].username===USERNAME){
            tweetsUser.push(tweets[i]);
        }
    }
    res.send(tweetsUser);
});
const PORT = 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

