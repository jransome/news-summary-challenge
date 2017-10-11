'use strict';

(function(){
  var url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=all";
  var apiRequester = new ApiRequester(url);
  var appElement = document.getElementById("app");
  var articleView = new ArticleView();
  var headlinesView = new HeadlinesView();
  var articleController = new ArticleController(apiRequester, appElement, Article, articleView, headlinesView);

})();
