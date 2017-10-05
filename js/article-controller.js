(function(exports){
  function ArticleController(articleModel) {
    this._articleModel = articleModel;
    this._storedArticles = {};
    this._IdCounter = 0;
  }

  ArticleController.prototype = {
    createNewArticleID: function(){
      return this._IdCounter++;
    },

    index: function(){
      return this._storedArticles;
    },

    new: function(articleData){
      var newArticle = new this._articleModel(articleData);
      this._storedArticles[this.createNewArticleID()] = newArticle;
    },

    show: function(id){
      return this._storedArticles[id];
    }
  };

  exports.ArticleController = ArticleController;
})(this);
