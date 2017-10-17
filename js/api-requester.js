 (function(exports){
  function ApiRequester(headlinesRequestUrl, summaryRequestUrl, xmlHttpRequestObj){
    this._headlinesRequestUrl = headlinesRequestUrl;
    this._summaryRequestUrl = summaryRequestUrl;
    this._xmlHttpRequestObj = xmlHttpRequestObj || new XMLHttpRequest();
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
      this._xmlHttpRequestObj.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(JSON.parse(this.responseText));
        }
      };

      this._xmlHttpRequestObj.open("GET", url, true);
      this._xmlHttpRequestObj.send();
    }
  };

  exports.ApiRequester = ApiRequester;
})(this);
