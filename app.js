
const express = require('express');
var Scraper = require('images-scraper');


var app = express();


app.get('/:queryParams/:qtdImg', (req, res) => {

    let qtdImg = req.params.qtdImg;
    let queryParams = req.params.queryParams;

    let main = async () => {

        const google = new Scraper({
            puppeteer: {
                headless: false,
            },
        });

        const results = await google.scrape(queryParams, qtdImg);

        let random = results[Math.trunc(Math.random() * results.length)];
        res.send(random);

    }


    main();

});


module.exports = app;
