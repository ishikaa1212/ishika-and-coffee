import express from 'express';

// const app = express();
app.get('/',(req,res)=>{
    res.send('server is ready');
});

import cors from 'cors';
app.use(cors());

//get a list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: ' This is a joke.'
        },
        {
            id:2,
            title: 'Another Joke',
            content: 'This is another joke.'
        },
        {
            id:3,
            title: 'A third joke',
            content:' This is a Third joke.'
        },
        {
            id:4,
            title: 'A fourth Joke',
            content:'This is a fourth joke'
        },
        {
            id:5,
            title: ' A fifth joke',
            content: ' This is Fifth Joke'
        }
    ];
    res.send(jokes);
});

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
}
);