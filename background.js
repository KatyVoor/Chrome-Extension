chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://news.ycombinator.com/";
    chrome.tabs.create({ url: newURL });
    var newURL = "https://www.npr.org/";
    chrome.tabs.create({ url: newURL });
    chrome.tabs.update(null, {url:"http://en.wikipedia.org"});
  }); 