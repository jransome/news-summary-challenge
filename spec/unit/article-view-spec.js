(function(){
  describe("Article view", function(){
    var articleMock = new Double(['headline', 'summary', 'thumbnail', 'url']);
    var articleMockHeadline = 'SENSTATIONAL HEADLINE';
    var articleMockSummary = 'Article summary... blah blah';
    var articleMockThumbnail = 'link to thumbnail';
    var articleMockUrl = 'link to original article';
    articleMock.stubFunctionAndReturn('headline', articleMockHeadline);
    articleMock.stubFunctionAndReturn('summary', articleMockSummary);
    articleMock.stubFunctionAndReturn('thumbnail', articleMockThumbnail);
    articleMock.stubFunctionAndReturn('url', articleMockUrl);

    var backButton = "<button onclick=window.location.href='#'>Back to headlines</button>";
    var articleHtml = ["<h1>", articleMockHeadline, "</h1>",
    "<div class='article-content'>",
    "<img src=", articleMockThumbnail, ">",
    "<p>", articleMockSummary, "</p>",
    "<p><a href=", articleMockUrl, ">Original article</a></p>",
    "</div>"].join("");

    var expectedHtml = articleHtml + backButton;

    it("#toHtml: renders the HTML for a single article", function(){
      var articleView = new ArticleView();
      return expect(articleView.toHtml(articleMock)).toEqual(expectedHtml);
    });
  });
})();
