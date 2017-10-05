(function(exports){
  function ArticleController(articleModel) {
    this._articleModel = articleModel;
    this._articleList = [];
  }

  ArticleController.prototype = {

    index: function(){
      return this._articleList;
    },

    new: function(articleData){
      var newArticle = new this._articleModel(articleData);
      this._storedArticles.push(newArticle);
    },

  };

  exports.ArticleController = ArticleController;
})(this);
