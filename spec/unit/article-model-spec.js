(function(){
  describe("Article model", function(){
    var articleId = 0;
    var summaryText = 'First sentence. Second sentence.';
    var summaryData = { sentences: ['First sentence.', 'Second sentence.'] }
    var data = {
      fields: {
        headline: "News of something interesting",
        bodyText: "Detail on news of something interesting",
        thumbnail: "image link",
      },
      webUrl: "www.NotTheDailyMail.com"
    };

    it("should have an id", function(){
      var article1 = new Article(articleId, data);
      return expect(article1.id()).toEqual(articleId);
    });

    it("should have headline", function(){
      var article1 = new Article(articleId, data);
      return expect(article1.headline()).toEqual(data.fields.headline);
    });

    it("should have a thumbnail", function(){
      var article1 = new Article(articleId, data);
      return expect(article1.thumbnail()).toEqual(data.fields.thumbnail);
    });

    it("should have content", function(){
      var article1 = new Article(articleId, data);
      return expect(article1.content()).toEqual(data.fields.bodyText);
    });

    it("should have the URL to the source", function(){
      var article1 = new Article(articleId, data);
      return expect(article1.url()).toEqual(data.webUrl);
    });

    it("#summary: sets the value of _summary", function(){
      var article1 = new Article(articleId, data);
      article1.summary(summaryData);
      return expect(article1._summary).toEqual(summaryText);
    });

    it("#summary: gets the value of _summary", function(){
      var article1 = new Article(articleId, data);
      article1._summary = summaryText;
      return expect(article1.summary()).toEqual(summaryText);
    });
  });
})();
