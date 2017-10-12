(function(exports){
  function ArticleView() {
  }

  ArticleView.prototype = {
    toHtml: function(article) {
      var backButton = "<button onclick=window.location.href=''>Back to headlines</button>";
      var article = ["<h1>", article.headline(), "</h1>",
                    "<div class='article-content'>",
                      "<img src=", article.thumbnail(), ">",
                      "<p>", article.content(), "</p>",
                      "<p><a href=", article.url(), ">Original article</a></p>",
                    "</div>"].join("");
      return article + backButton;
    }
  };

  exports.ArticleView = ArticleView;
})(this);
