(function(exports){
  function ArticleView() {
  }

  ArticleView.prototype = {
    toHtml: function(article) {
      return ["<h1>" + article.title() + "</h1>",
              "<div class='article-content'><p>",
              article.content(),
              "</p></div>"
              ].join("");
    }
  };

  exports.ArticleView = ArticleView;
})(this);
