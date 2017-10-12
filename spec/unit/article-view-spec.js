(function(){
  var articleMock = new Double(['headline', 'content', 'thumbnail', 'url']);
  var articleMockTitle = 'SENSTATIONAL HEADLINE';
  var articleMockContent = 'Article content... blah blah';
  var articleMockThumbnail = 'link to thumbnail';
  var articleMockUrl = 'link to original article';
  articleMock.stubFunctionAndReturn('headline', articleMockTitle);
  articleMock.stubFunctionAndReturn('content', articleMockContent);
  articleMock.stubFunctionAndReturn('thumbnail', articleMockThumbnail);
  articleMock.stubFunctionAndReturn('url', articleMockUrl);

  var backButton = "<button onclick=window.location.href=''>Back to headlines</button>";
  var articleHtml = ["<h1>", articleMockTitle, "</h1>",
                    "<div class='article-content'>",
                      "<img src=", articleMockThumbnail, ">",
                      "<p>", articleMockContent, "</p>",
                      "<p><a href=", articleMockUrl, ">Original article</a></p>",
                    "</div>"].join("");

  var expectedHtml =  articleHtml + backButton;

  describe("Article view", function(){
    it("#toHtml: renders the HTML for a single article", function(){
      var articleView = new ArticleView();
      return expect(articleView.toHtml(articleMock)).toEqual(expectedHtml);
    });
  });
})();
