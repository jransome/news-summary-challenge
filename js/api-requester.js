 (function(exports){
  function ApiRequester(headlinesRequestUrl, summaryRequestUrl){
    this._headlinesRequestUrl = headlinesRequestUrl;
    this._summaryRequestUrl = summaryRequestUrl;
  }

  ApiRequester.prototype = {
    getArticleSummary: function(articleUrl, callback){
      this.makeRequest(this._summaryRequestUrl + articleUrl, function(response){
        callback(response);
      });
    },

    getHeadlines: function(callback){
      this.makeRequest(this._headlinesRequestUrl, function(response){
        callback(response);
      });
    },

    makeRequest: function(url, callback){
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(JSON.parse(this.responseText));
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
    }
  };

  exports.ApiRequester = ApiRequester;
})(this);
