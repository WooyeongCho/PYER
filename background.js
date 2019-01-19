/* Pyer Entry Theme */

chrome.tabs.onUpdated.addListener(function (t) {
  codes();
});

chrome.tabs.onActivated.addListener(function (tt) {
  codes();
});

function inject(path) {
  chrome.tabs.insertCSS({file: path});
}

function codes() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url;

    if(url.startsWith("https://playentry.org/ws")) {
      chrome.storage.sync.get(['enabled'], function(result) {
        if(result.enabled) {
          inject("default_theme/def_dark.css");
        }
      });    
    }
  });
}
