/* Pyer Entry Theme */

const getCssByFont = (fontName) => {
  return `* {
    font-family: '${fontName}', sans-serif !important;
    font-weight: normal;
    font-style: normal;
  }`
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.startsWith('https://playentry.org/ws')) {
    if (changeInfo.status === "loading") {
      
      chrome.storage.local.get(['enabled', 'selectedTheme', 'fileData', 'fontName'], function(result) {
        if(result.enabled == undefined) { //최초 실행 시
          chrome.storage.local.set({'enabled': true});
          chrome.storage.local.set({'selectedTheme': 0});
        }
        if (result.fontName === undefined) {
          chrome.storage.local.set({ 'fontName': 'none' });
        }
        if(result.enabled) {

          // get font
          if(result.fontName != 'none') {
            inject("default_theme/fonts.css", "file");
            inject(getCssByFont(result.fontName), "code");
          }
          
          // 주입
          if(result.selectedTheme > -1) {
            if(result.selectedTheme == 0) {
              inject("default_theme/def_sans.css", "file");
            } else if (result.selectedTheme == 1) {
              inject("default_theme/def_mint_by_jwp0116.css", "file");
            } else if (result.selectedTheme == 2) {
              inject("default_theme/def_sepia.css", "file");
            } else {
              let code = result.fileData;
               inject(code, "code");
            }
          }
         }
      });
    } else {
      var PYER_VERSION = chrome.runtime.getManifest().version;
      chrome.scripting.executeScript({target: {tabId: tabId}, func: addWater, args: [PYER_VERSION]});
    }
  }
})

function inject(path, type) {
  chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
    if(tabs[0].id) { 
      if(type == "file") {
        chrome.scripting.insertCSS({target: {tabId: tabs[0].id}, files: [path]});
      } else {
        chrome.scripting.insertCSS({css: path, target: {tabId: tabs[0].id}});
      }
    }
  })
  
}

// 워터마크 삽입

function addWater (version) {
  let elementExists = document.getElementById("water_pyer");
  if(!elementExists) {  
    var header = document.getElementById( 'common_srch' );
    var str = `
    <div class="noselect" id="water_pyer" title="PYER Github Repository로 이동하기" OnClick="window.open('https://github.com/WooyeongCho/PYER')", '_blank');" style="float: left; position:absolute; top: 13px; left: 320px;">
      <img src="https://i.ibb.co/PGCf9RG/icon-128.png" alt="icon-128" class="noselect" border="0" style="width: 18px; height: 18px;">
      <span style="color:white; font-size: 14px; font-weight:800;" class="noselect" id="pyer"> PYER</span> 
      <span style="color:rgba(255,255,255,0.6); font-size: 8px; font-weight:400;" class="noselect" id="pyerversion">v.${version}</span>
    </div>

    <style>
    #water_pyer {
      top: 10px !important; 
      padding: 3px;
      padding-left: 5px;
      padding-right: 5px;
      border-radius: 20px;
      background-color: rgba(255,255,255,0.1);
      border: 2px solid rgba(255,255,255,0.125);
      transition-duration: 0.3s;
    }
    
    #water_pyer:hover {
      transition-duration: 0.3s;
      background-color: rgba(255,255,255,0.3);
      border: 2px solid rgba(255,255,255,0.325);
      box-shadow: 0px 2px 6px rgba(255,255,255,0.2);
    }

    #water_pyer * {
      font-family: 'Montserrat', sans-serif !important;
    }

    .noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    </style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet">
    `;
    
    header.insertAdjacentHTML( 'beforeend', str );
  }
}

//<span style="color:#787878; font-size: 14px; float: right; margin-left:10px; margin-top:2px; font-weight:bold;" id="pyer_sub">개발 <a href="https://github.com/WooyeongCho" style="color:#d34aff;" target="_blank" id="pyer_dev">wy24</a> 도움 <a href="https://github.com/thoratica" style="color:#d34aff;" target="_blank" id="pyer_sup">tica</a>, <a href="https://github.com/jedeop" style="color:#d34aff;" target="_blank" id="pyer_sup">jedoep</a></span>