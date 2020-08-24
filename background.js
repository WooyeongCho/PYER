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
      chrome.storage.local.get(['enabled', 'selectedTheme', 'fileData'], function(result) {
        if(result.enabled == undefined) { //최초 실행 시
          chrome.storage.local.set({'enabled': true});
          chrome.storage.local.set({'selectedTheme': 0});
        }
        if(result.enabled) {
          if(url.startsWith("https://playentry.org/ws")) {
          chrome.tabs.executeScript({file: "water.js"});
          if(result.selectedTheme > -1) {
            if(result.selectedTheme == 0) {
              inject("default_theme/def_sans.css", "file");
              //inject("default_theme/def_dark.css", "file");
            } else if (result.selectedTheme == 1) {
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
