/* Pyer Entry Theme */

chrome.tabs.onUpdated.addListener(function (t) {
  codes();
});

chrome.tabs.onActivated.addListener(function (tt) {
  codes();
});

function inject(path, type) {
  if(type == "file") {
    chrome.tabs.insertCSS({file: path, runAt: "document_end"});
  } else {
    chrome.tabs.insertCSS({code: path, runAt: "document_end"});
  }
}

function codes() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url;
      chrome.storage.sync.get(['enabled', 'selectedTheme', 'fileData', 'plzClick'], function(result) {
        if(result.enabled == undefined) { //최초 실행 시
          chrome.storage.sync.set({'enabled': true});
          chrome.storage.sync.set({'selectedTheme': 1});
          chrome.storage.sync.set({'plzClick': true});
        }
        if(result.enabled) {
          if(url.startsWith("https://playentry.org/ws")) {
          chrome.tabs.executeScript({file: "water.js"});
          if(result.selectedTheme) {
            if(result.selectedTheme == 1) {
              inject("default_theme/def_sans.css", "file");
              //inject("default_theme/def_dark.css", "file");
            } else if (result.selectedTheme == 2) {
              inject("default_theme/def_mint_by_jwp0116.css", "file");
            } else {
              let code = result.fileData;
              inject(code, "code");
            }
            // inject(`button,li:not(.entryContainerListElementWorkspace),a {

            //   transition: filter .2s;
            // }
            
            // button:hover,li:not(.entryContainerListElementWorkspace):hover,a:hover {
            //   filter: brightness(80%);
            // }
            // `, "code")
          }
        }
      }
      });
  });
}
