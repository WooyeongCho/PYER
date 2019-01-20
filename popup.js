const github = "https://github.com/WooyeongCho/Pyer";

$(document).ready(function(){
  $('select').formSelect();
  $('.tooltipped').tooltip();

  chrome.storage.sync.get(['enabled'], function(result) {
    $('#es').prop('checked', result.enabled);
  });

  $('#githubLink').click(function () {
    chrome.tabs.create({"url": github})
  });

  $('#upload').on('click', function() {
    $('#file-input').trigger('click');
  });

  $('#save').click(function () {
    let isEnabled = $('#es').prop('checked');
    chrome.storage.sync.set({'enabled': isEnabled});
    console.log(`Save Changes.`);
    M.toast({html: '저장되었습니다.', displayLength: 500})
  });
});
