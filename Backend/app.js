const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRouter = require('./src/routers/todoRouter');

const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
 };
 
app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use('/api', todoRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

