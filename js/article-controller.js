(function(exports){
  function ArticleController(apiRequester, appElement, articleModel, articleView, headlinesView, windowObj) {
    this._apiRequester = apiRequester;
    this._appElement = appElement;
    this._articleModel = articleModel;
    this._articleView = articleView;
    this._headlinesView = headlinesView;
    this._window = windowObj || window;
    this._articleDatabase = {};
    this._IdCounter = 0;
  }

  ArticleController.prototype = {
    setupHashListener: function(){
      this._window.addEventListener("hashchange", this.hashChangeHandler.bind(this));
    },

    hashChangeHandler: function(){
      var self = this;
      var articleId = location.hash.substr(1);
      if(articleId === '') {
        self.index();
      } else {
        var article = self._articleDatabase[articleId];
        if(article.summary() === null){
          self.requestArticleSummary(article, function(){
            self.show(articleId);
          });
        } else {
          self.show(articleId);
        }
      }
    },

    index: function(){
      var html = this._headlinesView.toHtml(this._articleDatabase);
      this.updateElement(html);
    },

    show: function(id){
      var html = this._articleView.toHtml(this._articleDatabase[id]);
      this.updateElement(html);
    },

    create: function(articleData){
      var newId = this.createNewArticleID();
      var newArticle = new this._articleModel(newId, articleData);
      this._articleDatabase[newId] = newArticle;
    },

    updateElement: function(html){
      this._appElement.innerHTML = html;
    },

    requestHeadlines: function(callback){
      var self = this;
      this._apiRequester.getHeadlines(function(response){
        self.saveHeadlineArticles(response);
        callback();
      });
    },

    saveHeadlineArticles: function(data){
      var self = this;
      data.response.results.forEach(function(article){
        self.create(article);
      });
    },

    requestArticleSummary: function(article, callback){
      var self = this;
      this._apiRequester.getArticleSummary(article.url(), function(response){
        self.saveArticleSummary(article, response);
        callback();
      });
    },

    saveArticleSummary: function(article, data){
      article.summary(data);
    },

    createNewArticleID: function(){
      return this._IdCounter++;
    }
  };

  exports.ArticleController = ArticleController;
})(this);
