var article1Title = 'SENSTATIONAL HEADLINE';
var article2Title = 'SENSTATIONAL HEADLINE 2';
var articleThumbnail = "http://memeshappen.com/media/created/What-the-hell-kind-of-test-is-this-meme-55370.jpg";
var articleUrl = 'url';

var article1 = new Double(['title', 'thumbnail', 'url']);
article1.stubFunctionAndReturn('title', article1Title);
article1.stubFunctionAndReturn('thumbnail', articleThumbnail);
article1.stubFunctionAndReturn('url', articleUrl);

var article2 = new Double(['title', 'thumbnail', 'url']);
article2.stubFunctionAndReturn('title', article2Title);
article2.stubFunctionAndReturn('thumbnail', articleThumbnail);
article2.stubFunctionAndReturn('url', articleUrl);

var headlinesData = {0: article1, 1: article2};

var headline1Html = "<div><img src=" + articleThumbnail + "><h2>" + article1Title + "</h2></div>";
var headline2Html = "<div><img src=" + articleThumbnail + "><h2>" + article2Title + "</h2></div>";
var expectedHtml = "<div>" + headline1Html + headline2Html + "</div>";

describe("Headlines view", function(){
  it("#toHtml: renders the HTML for a list of articles", function(){
    var headlinesView = new HeadlinesView();
    return expect(headlinesView.toHtml(headlinesData)).toEqual(expectedHtml);
  });
});
