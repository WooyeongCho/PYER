const github = "https://github.com/WooyeongCho/Pyer";

/* 최초 실행 시 storage 값 설정 */

$(document).ready(function(){
  $('select').formSelect();
  $('.tooltipped').tooltip();

  chrome.storage.sync.get(['enabled'], function(result) {
    $('#es').prop('checked', result.enabled);
  });

  chrome.storage.sync.get(['selectedTheme'], function(result) {
    $('#ts').val(result.selectedTheme);
    $('#ts').formSelect();
  });

  chrome.storage.sync.get(['fileName'], function(result) {
    $('#fileNameView').text(`선택된 파일 : ${result.fileName}`);
    $('#outter').text(`외부 파일 (${result.fileName})`);
  });

  $('#githubLink').click(function () {
    chrome.tabs.create({"url": github})
  });

  $('#upload').on('click', function() {
    $('#file-input').trigger('click');
  });

  $( "#file-input" ).change(function(event) {
    var file = document.getElementById("file-input").files[0];
    if (file) {
      var reader = new FileReader();
      var fullPath = $('#file-input').val();
      var fileName = fullPath.split("\\")[2];
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        chrome.storage.sync.set({'fileName': fileName});
        chrome.storage.sync.set({'fileData': evt.target.result});
        $('#fileNameView').text(`선택된 파일 : ${fileName}`);
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
    M.toast({html: '저장되었습니다.', displayLength: 500})
  });
});
