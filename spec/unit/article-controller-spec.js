function ArticleModelMock(data){
  this._data = data;
}

function ArticleViewMock(){
  this._elementInnerHtml = "";
}

ArticleViewMock.prototype = {
  toHtml: function(data){
    this._elementInnerHtml = data;
  }
}

var mockArticleView = new ArticleViewMock();
var mockArticleData = "article data";
var mockArticle1 = new Double();
var mockArticle2 = new Double();
var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
var articleIdQuery = 1;

describe("Article controller", function(){
  it("#new: creates a new article with given data", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView);
    articleController.new(mockArticleData);
    return expect(articleController._articleDatabase[0]).toBeInstanceOf(ArticleModelMock);
  });

  it("#index: returns all stored articles", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView);
    articleController._articleDatabase = mockStoredArticles;
    return expect(articleController.index()).toEqual(mockStoredArticles);
  });

  it("#show: sends the article with specified id to the article-view", function(){
    var articleController = new ArticleController(ArticleModelMock, mockArticleView);
    articleController._articleDatabase = mockStoredArticles;
    articleController.show(articleIdQuery)
    return expect(mockArticleView._elementInnerHtml).toEqual(mockArticle2);
  });
});
