chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.status !== 'complete')
  {
    return;
  }
  var match = 'https://calendar.google.com/';
  if(tab.url.substring(0, match.length) === match)
  {
    console.log("YO YO YO");
    chrome.tabs.executeScript(tabId, {file: 'today.js' });
  }
});
