(function(exports){
  function ArticleView() {
  }

  ArticleView.prototype = {
    toHtml: function(article) {
      var backButton = "<button onclick='articleController.index()'>Back to headlines</button>";
      var article = ["<h1>" + article.title() + "</h1>",
              "<div class='article-content'><p>",
              article.content(),
              "</p></div>"
              ].join("");
      return backButton + article;
    }
  };

  exports.ArticleView = ArticleView;
})(this);
