const express = require('express');


const app = express();
const port = 4000;


app.get('/', (req, resp) => resp.send('<h1> Hello World. </h1>'));

app.listen(port, () => console.log('app is up and running ...'));