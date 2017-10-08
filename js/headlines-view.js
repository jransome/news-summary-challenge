(function(exports){
  function HeadlinesView() {
  }

  HeadlinesView.prototype = {
    toHtml: function(articles) {
      var outputHtml = "<div>";
      for (var eachArticle in articles) {
        console.log(articles[eachArticle].thumbnail())
        outputHtml += "<div><img src=" + articles[eachArticle].thumbnail() + "><h2>" + articles[eachArticle].title() + "</h2></div>";
      }
      outputHtml += "</div>";
      return outputHtml;
    }
  };

  exports.HeadlinesView = HeadlinesView;
})(this);
