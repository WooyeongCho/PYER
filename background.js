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
      chrome.storage.sync.get(['enabled', 'selectedTheme'], function(result) {
        if(result.enabled === undefined) { //최초 실행 시
          chrome.storage.sync.set({'enabled': true});
          chrome.storage.sync.set({'selectedTheme': 1});
        }
        if(result.enabled) {
          chrome.tabs.executeScript({file: "water.js"});
          if(result.selectedTheme) {
            if(result.selectedTheme == 1) {
              inject("default_theme/def_dark.css");
            } else if (result.selectedTheme == 2) {
              inject("default_theme/def_moonlight.css");
            } else {
              inject("file:///G:/test.css");
            }
          }
        }
      });
    }
  });
}
