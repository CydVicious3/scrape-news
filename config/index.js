const cheerio = require('cheerio')
// const axios = require('axios')
const request = require('request')


request('https://www.huffpost.com/news/us-news', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html)
    const cardHeadlines = $('.card_headlines')
    console.log(cardHeadlines)
  }
})