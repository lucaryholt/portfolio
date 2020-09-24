const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const pages = require('./data/pages.json');

app.get('/api/pages', (req, res) => {
    const enabledPages = pages.filter(page => {
        if(page.enabled === true){
            return page;
        }
    });
    res.send({ data: enabledPages });
});

const port = process.env.PORT ? process.env.PORT : 80;

app.listen(port, (error) => {
    if(error){
        console.log('Error starting server.');
    } else {
        console.log('Server started on port:', Number(port));
    }
});