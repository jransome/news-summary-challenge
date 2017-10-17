'use strict';

(function(){
  var headlinesRequestUrl = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=all";
  var summaryRequestUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";

  var appElement = document.getElementById("app");
  var apiRequester = new ApiRequester(headlinesRequestUrl, summaryRequestUrl);
  var articleView = new ArticleView();
  var headlinesView = new HeadlinesView();
  var articleController = new ArticleController(apiRequester, appElement, Article, articleView, headlinesView);

  articleController.setupHashListener();
  articleController.requestHeadlines(function(){
    articleController.index();
  });

})();
