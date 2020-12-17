require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.static('public'));

const liveProjects = require('./data/live-projects.json').filter(page => {
    if(page.enabled === true) return page;
});
const otherProjects = require('./data/other-projects.json').filter(page => {
    if(page.enabled === true) return page;
});

app.get('/api/projects', (req, res) => {
    return res.status(200).send({ live: liveProjects, other: otherProjects });
});

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log('Error starting server.');
    } else {
        console.log('Server started on port:', Number(process.env.PORT));
    }
});