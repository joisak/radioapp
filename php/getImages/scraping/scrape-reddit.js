var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.theguardian.com/football/2016/may/13/watford-sunderland-match-preview", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('article').each(function( index ) {
    var title = $(this).find('p.title > a.title').text().trim();
    var score = $(this).find('div.score.unvoted').text().trim();
    var user = $(this).find('a.author').text().trim();
    var image = $(this).find('img').attr('src');
    console.log(image);
    console.log("Title: " + title);
    console.log("Score: " + score);
    console.log("User: " + user);
    fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
    $('.match-list ul').append("<li><img src='" + image + "'/></li>");
  });

});