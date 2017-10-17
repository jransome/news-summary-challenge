var mockArticleUrl = "http://news/article1.com";
var mockHeadlinesRequestUrl = "http://headlines.com";
var mockSummaryRequestUrl = "http://summaries.com/summarise?url=";
var mockXMLHttpRequest = new Double(['open', 'send']);

(function(){
  describe("API requester", function(){
    it("#getHeadlines: opens an api request for the headlines url", function(){
      var apiRequester = new ApiRequester(mockHeadlinesRequestUrl, mockSummaryRequestUrl, mockXMLHttpRequest);
      apiRequester.getHeadlines();
      return expect(mockXMLHttpRequest.openArguments[1]).toEqual(mockHeadlinesRequestUrl);
    });

    it("#getArticleSummary: opens an api request for an article summary url", function(){
      var apiRequester = new ApiRequester(mockHeadlinesRequestUrl, mockSummaryRequestUrl, mockXMLHttpRequest);
      apiRequester.getArticleSummary(mockArticleUrl);
      return expect(mockXMLHttpRequest.openArguments[1]).toEqual(mockSummaryRequestUrl + mockArticleUrl);
    });

    it("#getHeadlines: sends the api request", function(){
      var previousSendCallCount = mockXMLHttpRequest.sendCallCount;
      var apiRequester = new ApiRequester(mockHeadlinesRequestUrl, mockSummaryRequestUrl, mockXMLHttpRequest);
      apiRequester.getHeadlines();
      return expect(mockXMLHttpRequest.sendCallCount).toEqual(previousSendCallCount + 1);
    });

    it("#getArticleSummary: sends the api request", function(){
      var previousSendCallCount = mockXMLHttpRequest.sendCallCount;
      var apiRequester = new ApiRequester(mockHeadlinesRequestUrl, mockSummaryRequestUrl, mockXMLHttpRequest);
      apiRequester.getArticleSummary(mockArticleUrl);
      return expect(mockXMLHttpRequest.sendCallCount).toEqual(previousSendCallCount + 1);
    });
  });
})();
