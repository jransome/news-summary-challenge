function ArticleMock(data){
  this._data = data;
}

var mockArticleData = "article data";
var mockArticle1 = new Double();
var mockArticle2 = new Double();
var mockStoredArticles = {0: mockArticle1, 1: mockArticle2};
var articleIdQuery = 1;

describe("Article controller", function(){
  it("#new: creates a new article with given data", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController.new(mockArticleData);
    return expect(articleController._articleDatabase[0]).toBeInstanceOf(ArticleMock);
  });

  it("#index: returns all stored articles", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController._articleDatabase = mockStoredArticles;
    return expect(articleController.index()).toEqual(mockStoredArticles);
  });

  it("#show: returns the article with the given id", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController._articleDatabase = mockStoredArticles;
    return expect(articleController.show(articleIdQuery)).toEqual(mockArticle2);
  });
});
