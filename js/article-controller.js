(function(exports){
  function ArticleController(articleModel) {
    this._articleModel = articleModel;
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
      return this._articleDatabase[id];
    }
  };

  exports.ArticleController = ArticleController;
})(this);
