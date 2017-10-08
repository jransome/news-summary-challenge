(function(exports){
  function ArticleController(appElement, articleModel, articleView, headlinesView) {
    this._appElement = appElement;
    this._articleModel = articleModel;
    this._articleView = articleView;
    this._headlinesView = headlinesView;
    this._articleDatabase = {};
    this._IdCounter = 0;
  }

  ArticleController.prototype = {
    createNewArticleID: function(){
      return this._IdCounter++;
    },

    index: function(){
      var html = this._headlinesView.toHtml(this._articleDatabase);
      this._appElement.innerHTML = html;
    },

    new: function(articleData){
      var newArticle = new this._articleModel(articleData);
      this._articleDatabase[this.createNewArticleID()] = newArticle;
    },

    show: function(id){
      var html = this._articleView.toHtml(this._articleDatabase[id]);
      this._appElement.innerHTML = html;
    }
  };

  exports.ArticleController = ArticleController;
})(this);
