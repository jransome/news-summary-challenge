 (function(exports){
  function ApiRequester(url){
    this._url = url;
  }

  ApiRequester.prototype = {
    getArticles: function(callback){
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(JSON.parse(this.responseText));
        }
      };

      xhttp.open("GET", this._url, true);
      xhttp.send();
    }
  };

  exports.ApiRequester = ApiRequester;
})(this);
