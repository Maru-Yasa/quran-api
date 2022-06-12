const Router = require('express').Router()
const fs = require('fs')

Router.route('/quran')
    .get((req, res) => {
        res.status(200).json(JSON.parse(fs.readFileSync('./quran.json', 'utf8')))
    })

Router.route('/quran/surah')
    .get((req, res) => {
        const number = req.query.surah
        const quran = JSON.parse(fs.readFileSync(`./surah/${number}.json`, 'utf8'));
        res.status(200).json(quran)

    })    

module.exports = Router