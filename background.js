chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://news.ycombinator.com/";
    chrome.tabs.create({ url: newURL });
  });