console.log("api routes")
const cheerio = require('cheerio')
const axios = require('axios')

module.exports = function (app) {
  app.get("/scrape", function (req, res) {
    axios.get('https://www.huffpost.com/news/us-news')
      .then(function (result) {
        var $ = cheerio.load(result.data)

        $(".card").each(function (i, card) {
          // get the info (scrape) from main news site
          var cardHeadlines = $(this).find(".card__headline__text").text()
          var cardDesc = $(this).find(".card__description").text()
          var cardImg = $(this).find("img").attr('src')
          // create the object and insert in the db
          const headline = JSON.parse(JSON.stringify(cardHeadlines))
          const description = JSON.parse(JSON.stringify(cardDesc))
          const image = JSON.parse(JSON.stringify(cardImg))
          console.log(image)


        })
        // redirect to the index page that will show the news



      })
  })

}

