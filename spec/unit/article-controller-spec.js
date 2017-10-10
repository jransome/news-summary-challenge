function ArticleModelMock(data){
  this._data = data;
}

var mockAppElement = {};
var mockNewArticleData = "article data";
var mockArticle1 = new Double();
var mockArticle2 = new Double();
var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
var articleIdQuery = 1;

// View mocks don't actually convert data to html
var mockArticleView = new Double(['toHtml']);
var mockArticle2Html = "article 2 html";
mockArticleView.stubFunctionAndReturn('toHtml', mockArticle2Html);

var mockHeadlinesView = new Double(['toHtml']);
var mockHeadlinesHtml = "headlines html";
mockHeadlinesView.stubFunctionAndReturn('toHtml', mockHeadlinesHtml);


describe("Article controller", function(){
  it("#create: creates a new article with given data", function(){
    var articleController = new ArticleController(mockAppElement, ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController.create(mockNewArticleData);
    return expect(articleController._articleDatabase[0]).toBeInstanceOf(ArticleModelMock);
  });

  it("#index: sends all articles to be rendered by the headlines-view", function(){
    var articleController = new ArticleController(mockAppElement, ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController._articleDatabase = mockStoredArticles;
    articleController.index();
    return expect(articleController._appElement.innerHTML).toEqual(mockHeadlinesHtml);
  });

  it("#show: sends the article with specified id to be rendered by the article-view", function(){
    var articleController = new ArticleController(mockAppElement, ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController._articleDatabase = mockStoredArticles;
    articleController.show(articleIdQuery);
    return expect(articleController._appElement.innerHTML).toEqual(mockArticle2Html);
  });
});
