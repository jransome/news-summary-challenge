(function(exports){
  function Article(id, data){
    this._id = id;
    var fields = data.fields;
    this._allFields = fields;
    this._headline = fields.headline;
    this._thumbnail = fields.thumbnail;
    this._content = fields.bodyText;
    this._summary = null;
    this._url = data.webUrl;
  }

  Article.prototype = {
    id: function(){
      return this._id;
    },

    headline: function(){
      return this._headline;
    },

    thumbnail: function(){
      return this._thumbnail;
    },

    content: function(){
      return this._content;
    },

    summary: function (data){
      if (data){
        this._summary = data.sentences.join(" ");
      } else{
        return this._summary;
      }
    },

    url: function(){
      return this._url;
    }
  };

  exports.Article = Article;
})(this);
