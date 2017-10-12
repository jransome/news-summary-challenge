(function(){
  var article1Title = 'SENSTATIONAL HEADLINE';
  var article2Title = 'SENSTATIONAL HEADLINE 2';
  var articleThumbnail = 'http://memeshappen.com/media/created/What-the-hell-kind-of-test-is-this-meme-55370.jpg';

  var article1 = new Double(['headline', 'thumbnail', 'id']);
  article1.stubFunctionAndReturn('headline', article1Title);
  article1.stubFunctionAndReturn('thumbnail', articleThumbnail);
  article1.stubFunctionAndReturn('id', 0);

  var article2 = new Double(['headline', 'thumbnail', 'id']);
  article2.stubFunctionAndReturn('headline', article2Title);
  article2.stubFunctionAndReturn('thumbnail', articleThumbnail);
  article2.stubFunctionAndReturn('id', 1);

  var headlinesData = {0: article1, 1: article2};

  var expectedHeadline1Html = ["<div>",
                                "<a href='#0'>",
                                  "<img src=", articleThumbnail, ">",
                                  "<h2>", article1Title, "</h2>",
                                "</a>",
                              "</div>"].join("");

  var expectedHeadline2Html = ["<div>",
                                "<a href='#1'>",
                                  "<img src=", articleThumbnail, ">",
                                  "<h2>", article2Title, "</h2>",
                                "</a>",
                              "</div>"].join("");

  var expectedHtml = "<div>" + expectedHeadline1Html + expectedHeadline2Html + "</div>";

  describe("Headlines view", function(){
    it("#toHtml: renders the HTML for a list of articles", function(){
      var headlinesView = new HeadlinesView();
      return expect(headlinesView.toHtml(headlinesData)).toEqual(expectedHtml);
    });
  });
})();
