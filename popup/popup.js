// by wy24
console.log("이건머냐")

let version = "";
//var vm = new Vue;
$.getJSON('../manifest.json', function (data) {
  version = data.version;
  $("#version").text(version)
});


const MDCComponent = mdc.base.MDCComponent;
const MDCFoundation = mdc.base.MDCFoundation;

const MDCSwitch = mdc.switchControl.MDCSwitch;

const MDCSelect = mdc.select.MDCSelect;

const MDCDialog = mdc.dialog.MDCDialog;

const MDCSnackbar = mdc.snackbar.MDCSnackbar;


let t = "";

// ripple
const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));
const listRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-list-item__ripple'));
// switch
const onOffSwitch = new MDCSwitch(document.querySelector('.mdc-switch'));
// select
const themeSelect = new MDCSelect(document.querySelector('#theme-select'));
const fontSelect = new MDCSelect(document.querySelector('#font-select'));
// dialog
var dialog;
// snackbar
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

// themeSelect.listen('MDCSelect:change', () => {
//   alert(`Selected option at index ${themeSelect.selectedIndex} with value "${themeSelect.value}"`);
// });

var set = (bool) => {
  onOffSwitch.checked = bool;
}

var get = () => {
  console.log(onOffSwitch.checked)
}


/* 상단 바 코드 보기 */
$('.view-code').click(function () {
  dialog = new MDCDialog(document.querySelector('#github-repo-dialog'));
  dialog.open()
});

/* 상단 바 코드 보기 버튼 눌렀을 때*/
$('#github-repo-dialog .mdc-dialog-accept').click(() => {
  chrome.tabs.create({ "url": "https://github.com/WooyeongCho/Pyer" })
})

/* 상단 바 스토어 가기 */
$('.go-store').click(function () {
  dialog = new MDCDialog(document.querySelector('#store-dialog'));
  dialog.open()
});

/* 상단 바 스토어 가기 버튼 눌렀을 때*/
$('#store-dialog .mdc-dialog-accept').click(() => {
  chrome.tabs.create({ "url": "https://bit.ly/entry_pyer" })
})

// css 불러오기 버튼을 눌렀을 때 => file input을 클릭하기
$('#open-css').on('click', function () {
  $('#file-input').trigger('click');
});

// 저장하기
$('#save-button').click(function () {
  chrome.storage.local.set({ 'enabled': onOffSwitch.checked });
  chrome.storage.local.set({ 'selectedTheme': themeSelect.selectedIndex });
  chrome.storage.local.set({ 'fontName': fontSelect.foundation_.getValue() });
  //chrome.storage.sync.set({'selectedTheme': });
  snackbar.open()
});

// 파일 불러오기 input
$("#file-input").change(function (event) {
  let file = document.getElementById("file-input").files[0];
  if (file) {
    let reader = new FileReader();
    let fullPath = $('#file-input').val();
    let fileName = fullPath.split("\\")[2];
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      chrome.storage.local.set({ 'fileName': fileName });
      chrome.storage.local.set({ 'fileData': evt.target.result });
      console.log( evt.target.result )
      $('#file-name').text(`선택된 CSS 파일 : ${fileName}`);
      
    }
    reader.onerror = function (evt) {
      alert("파일 업로드 실패");
    }
  }
});


//themeSelect.foundation_.setSelectedIndex(2)

chrome.storage.local.get(['enabled', 'selectedTheme', 'fileName', 'fontName'], function (result) {
  if (result.enabled === undefined) { //최초 실행 시
    chrome.storage.local.set({ 'enabled': true });
    chrome.storage.local.set({ 'selectedTheme': 0 }); 
  }
  if (result.fontName === undefined) {
    chrome.storage.local.set({ 'fontName': 'none' });
  }
  if (result.fileName != undefined) {
    $('#file-name').text(`선택된 CSS 파일 : ${result.fileName}`);
  } else {
    $('#file-name').text(`선택된 CSS 파일이 없습니다.`);
  }
  
  onOffSwitch.foundation_.setChecked(result.enabled)
  themeSelect.foundation_.setSelectedIndex(result.selectedTheme);
  fontSelect.foundation_.setValue(result.fontName)
});


// hello :D
$(document).keypress(function (key) {
  t = t + key.key;
  console.log(t)
  if (t.includes("again")) {
    t = "";
  }
  if (t == "pyer") {
    $("#contents").hide();
    $("#wy24").show();
  }
});

$('#hello').click(() => {
  chrome.tabs.create({ "url": "https://bit.ly/entry_pyer" })
})