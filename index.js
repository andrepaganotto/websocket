const websocket = require('./app-ws.js');
const express = require('express');

const app = express();
app.use(express.json());

const server = app.listen(3000, () => {
    console.log('Listening on 3000');
});

app.get('/', (req, res) => res.send('Hello World'));

const wss = websocket(server);

let i = 0;
setInterval(() => wss.broadcast(i++), 1000);
