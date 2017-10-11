(function(exports){
  function ArticleController(apiRequester, appElement, articleModel, articleView, headlinesView) {
    this._apiRequester = apiRequester;
    this._appElement = appElement;
    this._articleModel = articleModel;
    this._articleView = articleView;
    this._headlinesView = headlinesView;
    this._articleDatabase = {};
    this._IdCounter = 0;
  }

  ArticleController.prototype = {
    index: function(){
      var html = this._headlinesView.toHtml(this._articleDatabase);
      this._appElement.innerHTML = html;
    },

    show: function(id){
      var html = this._articleView.toHtml(this._articleDatabase[id]);
      this._appElement.innerHTML = html;
    },

    create: function(articleData){
      var newArticle = new this._articleModel(articleData);
      this._articleDatabase[this.createNewArticleID()] = newArticle;
    },

    requestArticles: function(){
      var self = this;
      this._apiRequester.getArticles(function(response){
        self.saveArticles(response);
      });
    },

    saveArticles: function(data){
      var self = this;
      data.response.results.forEach(function(article){
        self.create(article);
      });
    },

    createNewArticleID: function(){
      return this._IdCounter++;
    }
  };

  exports.ArticleController = ArticleController;
})(this);
