(function(){

  function MockArticleModel(data){
    this._data = data;
  }

  var mockApiRequester = new Double(['getHeadlines', 'getArticleSummary']);
  var mockAppElement = {};

  var mockArticleView = new Double(['toHtml']);
  var mockArticle2Html = "article 2 html";
  mockArticleView.stubFunctionAndReturn('toHtml', mockArticle2Html);

  var mockHeadlinesView = new Double(['toHtml']);
  var mockHeadlinesHtml = "headlines html";
  mockHeadlinesView.stubFunctionAndReturn('toHtml', mockHeadlinesHtml);

  var mockWindow = new Double(['addEventListener'])

  function createNewSubjectClass(){
    return new ArticleController(mockApiRequester, mockAppElement, MockArticleModel, mockArticleView, mockHeadlinesView, mockWindow);
  }

  var mockNewArticleData = "article data";
  var mockArticle1 = new Double(['summary']);
  var mockArticle2 = new Double();
  var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
  var articleIdQuery = 1;

  describe("Article controller", function(){
    it("#create: creates a new article with given data", function(){
      var articleController = createNewSubjectClass();
      articleController.create(mockNewArticleData);
      return expect(articleController._articleDatabase[0]).toBeInstanceOf(MockArticleModel);
    });

    it("#index: sends all articles to be rendered by the headlines-view", function(){
      var articleController = createNewSubjectClass();
      articleController._articleDatabase = mockStoredArticles;
      articleController.index();
      return expect(articleController._appElement.innerHTML).toEqual(mockHeadlinesHtml);
    });

    it("#show: sends the article with specified id to be rendered by the article-view", function(){
      var articleController = createNewSubjectClass();
      articleController._articleDatabase = mockStoredArticles;
      articleController.show(articleIdQuery);
      return expect(articleController._appElement.innerHTML).toEqual(mockArticle2Html);
    });

    it("#requestHeadlines: calls getHeadlines() on the apiRequester object", function(){
      var articleController = createNewSubjectClass();
      articleController.requestHeadlines();
      return expect(mockApiRequester.getHeadlinesCallCount).toEqual(1);
    });

    it("#requestArticleSummary: calls getHeadlines() on the apiRequester object", function(){
      var articleController = createNewSubjectClass();
      mockArticle1.stubFunctionAndReturn('url', 'url');
      articleController.requestArticleSummary(mockArticle1);
      return expect(mockApiRequester.getArticleSummaryCallCount).toEqual(1);
    });

    it("#saveArticleSummary: saves a content summary to the article", function(){
      var articleController = createNewSubjectClass();
      mockArticle1.stubFunctionAndReturn('summary', null);
      articleController.saveArticleSummary(mockArticle1, 'mock summary');
      return expect(mockArticle1.summaryCallCount).toEqual(1);
    });

    it("#setupHashListener: sets up a hash change listener", function(){
      var articleController = createNewSubjectClass();
      articleController.setupHashListener();
      return expect(mockWindow.addEventListenerArguments[0]).toEqual('hashchange');
    });
  });
})();
