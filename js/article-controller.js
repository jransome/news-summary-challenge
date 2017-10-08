(function(exports){
  function ArticleController(articleModel, articleView) {
    this._articleModel = articleModel;
    this._articleView = articleView;
    this._articleDatabase = {};
    this._IdCounter = 0;
  }

  ArticleController.prototype = {
    createNewArticleID: function(){
      return this._IdCounter++;
    },

    index: function(){
      return this._articleDatabase;
    },

    new: function(articleData){
      var newArticle = new this._articleModel(articleData);
      this._articleDatabase[this.createNewArticleID()] = newArticle;
    },

    show: function(id){
      this._articleView.toHtml(this._articleDatabase[id]);
    }
  };

  exports.ArticleController = ArticleController;
})(this);
