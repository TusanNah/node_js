const express = require('express');
const app = express(); //instance
const port = 3000;

//route
app.get('/trang-chu', (req, res) => res.send('Hello world!'));
// http://localhost:3000/trang-chu
// server send response "Hello world!"
//127.0.0.1 - localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))