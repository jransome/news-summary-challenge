function ArticleMock(data){
  this._data = data;
}

var mockData = "article data";
var mockStoredArticles = [new ArticleMock(mockData), new ArticleMock(mockData)];

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

});
