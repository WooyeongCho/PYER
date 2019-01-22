const github = "https://github.com/WooyeongCho/Pyer";
const guide = "https://docs.google.com/document/d/1Sm3SfXXWOZTk6YFBpd8EGntOPht7jpPnpEi9MJBIZNA/edit?usp=sharing";
let t = "";
/* 최초 실행 시 storage 값 설정 */

$(document).ready(function(){

  chrome.storage.sync.get(['enabled', 'selectedTheme', 'fileName', 'plzClick'], function(result) {
    if(result.enabled === undefined) { //최초 실행 시
      chrome.storage.sync.set({'enabled': true});
      chrome.storage.sync.set({'selectedTheme': 1});
      chrome.storage.sync.set({'plzClick': true});
      window.location.href="popup.html";
    }
    $('#es').prop('checked', result.enabled);
    $('#ts').val(result.selectedTheme);
    $('#ts').formSelect();
    if(result.fileName == undefined) {
      $('#fileNameView').text(`선택된 파일 : 없음`);
      $('#outter').text(`외부 파일 (없음)`);
    } else {
      $('#fileNameView').text(`선택된 파일 : ${result.fileName}`);
      $('#outter').text(`외부 파일 (${result.fileName})`);
    }
    if(!result.plzClick) {
      $('.sb').hide();
    }
  });

  $('select').formSelect();
  $('.tooltipped').tooltip();
  $('.collapsible').collapsible();

  $('#githubLink').click(function () {
    chrome.tabs.create({"url": github})
  });

  $('#guideLink').click(function () {
    chrome.tabs.create({"url": guide})
  });

  $('#helpButton').click(function () {
    window.location.replace("popup_guide.html");
  });

  $('#backToHome').click(function () {
    window.location.replace("popup.html");
  });

  $('#upload').on('click', function() {
    $('#file-input').trigger('click');
  });

  $("i.sbClose").click(function() {
    $(this).parent().hide();
    chrome.storage.sync.set({'plzClick': false});
  });

  $( "#file-input" ).change(function(event) {
    let file = document.getElementById("file-input").files[0];
    if (file) {
      let reader = new FileReader();
      let fullPath = $('#file-input').val();
      let fileName = fullPath.split("\\")[2];
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        chrome.storage.sync.set({'fileName': fileName});
        chrome.storage.sync.set({'fileData': evt.target.result});
        $('#fileNameView').text(`선택된 파일 : ${fileName}`);
        if(fileName == "wy24.css") {
          M.toast({html: "It's me!", displayLength: 3000})
        } else {
          M.toast({html: '파일이 선택되었습니다. 테마 선택하기에서 외부 테마를 고르신 후 저장하기 버튼을 눌러주세요.', displayLength: 3000})
        }
      }
      reader.onerror = function (evt) {
        alert("파일 업로드 실패");
      }
    }
  });

  $('#save').click(function () {
    let isEnabled = $('#es').prop('checked');
    let selectedTheme = $('#ts').val();
    chrome.storage.sync.set({'enabled': isEnabled});
    chrome.storage.sync.set({'selectedTheme': selectedTheme});
    console.log(`Save Changes.`);
    M.toast({html: '저장되었습니다. 엔트리 만들기 페이지를 새로고침해보세요.', displayLength: 1000})
  });

  $(document).keypress(function (key) {
    t = t + key.key;
    if(t.includes("again")) {
      t = "";
    }
    if(t == "wy24 loves me") {
      $("#contents").hide();
      $( "#wy24" ).append( "<h2>Yes, I love you.</h2>" );
    }
  });
});
