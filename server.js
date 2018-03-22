// website by yuk - yuk.digital - yukenquiries@gmail.com

// set up

const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const db = require('./db');

// middleware

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.use(compression());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// routes

app.get('/robots.txt', (req, res) => {
    res.sendFile(__dirname + '/robots.txt');
})

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(__dirname + '/sitemap.xml');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/medium', (req, res) => {
    db.getImages(req.body.medium).then(x => {
        res.json(x);
    })
});

app.listen(process.env.PORT || 8080, () => console.log('on 808 state...'));
