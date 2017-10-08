var appElement = document.getElementById("app");
var articleView = new ArticleView();
//TODO var headlinesView = new HeadlinesView();
var articleController = new ArticleController(appElement, Article, articleView);
