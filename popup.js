$(document).ready(function(){
  $('select').formSelect();
  $('.tooltipped').tooltip();

  chrome.storage.sync.get(['enabled'], function(result) {
    $('#es').prop('checked', result.enabled);
  });

  $('#save').click(function () {
    let isEnabled = $('#es').prop('checked');
    chrome.storage.sync.set({'enabled': isEnabled});
    console.log(`Save Changes.`);
    M.toast({html: '저장되었습니다.', displayLength: 500})
  });
});
