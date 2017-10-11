(function(){
  var articleMock = new Double(['title', 'content']);
  var articleMockTitle = 'SENSTATIONAL HEADLINE';
  var articleMockContent = 'Article content... blah blah';
  articleMock.stubFunctionAndReturn('title', articleMockTitle);
  articleMock.stubFunctionAndReturn('content', articleMockContent);

  var backButton = "<button onclick='articleController.index()'>Back to headlines</button>";
  var articleHtml = "<h1>" + articleMockTitle + "</h1><div class='article-content'><p>" + articleMockContent + "</p></div>";
  var expectedHtml = backButton + articleHtml;

  describe("Article view", function(){
    it("#toHtml: renders the HTML for a single article", function(){
      var articleView = new ArticleView();
      return expect(articleView.toHtml(articleMock)).toEqual(expectedHtml);
    });
  });
})();
