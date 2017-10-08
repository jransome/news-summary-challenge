function ArticleModelMock(data){
  this._data = data;
}

function ViewMock(){}

ViewMock.prototype = {
  toHtml: function(data){
    this._elementData = data;
  }
}

var mockHeadlinesView = new ViewMock();
var mockArticleView = new ViewMock();
var mockArticleData = "article data";
var mockArticle1 = new Double();
var mockArticle2 = new Double();
var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
var articleIdQuery = 1;

describe("Article controller", function(){
  it("#new: creates a new article with given data", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController.new(mockArticleData);
    return expect(articleController._articleDatabase[0]).toBeInstanceOf(ArticleModelMock);
  });

  it("#index: sends all articles to be rendered by the headlines-view", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController._articleDatabase = mockStoredArticles;
    articleController.index();
    console.log(mockHeadlinesView)
    return expect(mockHeadlinesView._elementData).toEqual(mockStoredArticles);
  });

  it("#show: sends the article with specified id to be rendered by the article-view", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView, mockHeadlinesView);
    articleController._articleDatabase = mockStoredArticles;
    articleController.show(articleIdQuery)
    return expect(mockArticleView._elementData).toEqual(mockArticle2);
  });
});
