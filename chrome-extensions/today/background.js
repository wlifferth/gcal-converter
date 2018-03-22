chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
  if(changeInfo.status !== 'complete')
  {
    return;
  }
  var match = 'https://www.google.com/calendar/render';
  if(tab.url.substring(0, match.length) === match)
  {
    chrome.tabs.executeScript(tabId, {file: 'today.js' });
  }
});
