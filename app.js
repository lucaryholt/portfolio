require('dotenv').config();

console.log(process.env.PORT)

const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const liveProjects = require('./data/live-projects.json');
const otherProjects = require('./data/other-projects.json')

app.get('/api/live-projects', (req, res) => {
    const enabledPages = liveProjects.filter(page => {
        if(page.enabled === true){
            return page;
        }
    });
    res.send({ data: enabledPages });
});

app.get('/api/other-projects', (req, res) => {
    const enabledPages = otherProjects.filter(page => {
        if(page.enabled === true){
            return page;
        }
    });
    res.send({ data: enabledPages });
});

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log('Error starting server.');
    } else {
        console.log('Server started on port:', Number(process.env.PORT));
    }
});
