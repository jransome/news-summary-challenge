function ArticleMock(data){
  this._data = data;
}

var mockData = "article data";

describe("Article manager", function(){
  it("creates a new article with given data", function(){
    var articleController = new ArticleController(ArticleMock);
    articleController.storeArticle(mockData);
    return expect(articleController._storedArticles[0]).toBeInstanceOf(ArticleMock);
  });


});
