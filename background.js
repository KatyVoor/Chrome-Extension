chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://news.ycombinator.com/";
    chrome.tabs.create({ url: newURL });
    var newURL = "https://www.npr.org/";
    chrome.tabs.create({ url: newURL });
    var newURL = "https://www.google.com/";
    chrome.tabs.create({ url: newURL });
  }); 