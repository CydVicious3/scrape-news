console.log("api routes")
const cheerio = require('cheerio')
const axios = require('axios')
// const request = require('request')

module.exports = function (app) {
  app.get("/scrape", function (req, res) {
    console.log("route  scrape")
    axios.get('https://www.huffpost.com/news/us-news')
      //axios.get("https://abcnews.go.com/Politics")
      .then(function (result) {
        //if (!error && response.statusCode == 200) {
        //console.log(html)
        var $ = cheerio.load(result.data)
        //const cards = $('.card')



        // $(".tag-block").each(function (i, card) {
        $(".card").each(function (i, card) {
          console.log("inside the loop", i)
          // get the info
          var cardHeadlines = $(this).find(".card__headline__text").text()
          var cardDesc = $(this).find(".card__description").text()
          var cardImg = $(this).find(".img-sized__img landscape").attr('src')
          // create the object and insert in the db



          console.log(cardHeadlines)
        })
        // redirect to the index page that will show the news


        // }
      })
  })

}

