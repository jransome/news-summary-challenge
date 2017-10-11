(function(exports){
  function HeadlinesView() {
  }

  HeadlinesView.prototype = {
    toHtml: function(articles) {
      var outputHtml = "<div>";
      for (var eachArticle in articles) {
        outputHtml += ["<div>",
                        "<a href='#", articles[eachArticle].id(), "'>",
                          "<img src=", articles[eachArticle].thumbnail(), ">",
                          "<h2>", articles[eachArticle].headline(), "</h2>",
                        "</a>",
                      "</div>"].join("");;
      }
      outputHtml += "</div>";
      return outputHtml;
    }
  };

  exports.HeadlinesView = HeadlinesView;
})(this);
