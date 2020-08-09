$(document).ready(function () {
  //create golbal var for button declare tweet & 1st load page quote..
  var randomNum;
  var randomQuote;
  var randomAuthor;
  getQuote();

  //create a getQuote function to store quote / author and return text to html
  function getQuote() {
    var quote = [
      "“A writer is someone for whom writing is more difficult than it is for other people.”",
      "“Long is the way and hard, that out of Hell leads up to light.”",
      "“I will be stronger than my sadness.”",
      "“My goal was never to make Facebook cool. I am not a cool person.”",
    ];

    var author = [
      "-Thomas Mann",
      "-John Milton",
      "-Jasmine Warga",
      "-Mark Zuckerberg",
    ];

    randomNum = Math.floor(Math.random() * quote.length);

    // assign var to quote which genarate to math.random
    randomQuote = quote[randomNum];
    randomAuthor = author[randomNum];

    $("#text").text(randomQuote);
    $("#author").text(randomAuthor);
  }

  //create a OnClick funtion to declare getQuote function above
  $("button").on("click", function () {
    getQuote();
  });
  //create a onClick link to direct tweet at twitter
  $("#tweet-quote").on("click", function () {
    window.open(
      "http://twitter.com/intent/tweet?text=" + randomQuote + " " + randomAuthor
    );
  });
});
