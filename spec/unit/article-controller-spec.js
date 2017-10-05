function ArticleMock(data){
  this._data = data;
}

var mockData = "article data";
var mockArticle1 = new ArticleMock(mockData);
var mockArticle2 = new ArticleMock(mockData);
var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
var articleIdQuery = 1;

describe("Article manager", function(){
  it("#new: creates a new article with given data", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController.new(mockData);
    return expect(articleController._storedArticles[0]).toBeInstanceOf(ArticleMock);
  });

  it("#index: returns all stored articles", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController._storedArticles = mockStoredArticles;
    return expect(articleController.index()).toEqual(mockStoredArticles);
  });

  it("#show: returns the article with the given id", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController._storedArticles = mockStoredArticles;
    return expect(articleController.show(articleIdQuery)).toEqual(mockArticle2);
  });
});
