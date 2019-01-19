// document.querySelector(".common_gnb").style.backgroundColor="#232323";
waitForElementToDisplay(".entryScene", 100);

function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
    // document.querySelector(".entryScene").style.backgroundColor="#232323";

    return;
  } else {
    setTimeout(function() {
      console.log("no")
      waitForElementToDisplay(selector, time);
    }, time);
  }
}
