'use strict';

const express = require('express');

// Constants
const PORT = 80;
//const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('html'))


app.get('/', (req, res) => {
    res.sendFile('t-rex-runner/index.html');
});


app.listen(PORT); //,HOST
console.log(`Running`);
