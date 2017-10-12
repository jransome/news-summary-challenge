'use strict';

(function(){
  var url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=all";

  var appElement = document.getElementById("app");
  var apiRequester = new ApiRequester(url);
  var articleView = new ArticleView();
  var headlinesView = new HeadlinesView();
  var articleController = new ArticleController(apiRequester, appElement, Article, articleView, headlinesView);

  articleController.requestArticles();

  window.addEventListener("hashchange", function() {
    if(!location.hash.includes("#")) {
      articleController.index();
    } else {
      var articleId = location.hash.substr(1);
      articleController.show(articleId);
    }
  });

})();
