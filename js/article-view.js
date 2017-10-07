(function(exports){
  function ArticleView(element) {
    this._element = element;
  }

  ArticleView.prototype = {
    toHtml: function(article) {
      return ["<h1>" + article.title() + "</h1>",
              "<div class='article-content'><p>",
              article.content(),
              "</p></div>"].join("");
    }
  };

  exports.ArticleView = ArticleView;
})(this);
