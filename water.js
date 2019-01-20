function addElement () {
  var elementExists = document.getElementById("water_pyer");
  if(!elementExists) {
    var random = Math.floor((Math.random() * 4));
    var list = ["Pyer is the fire!", "Pyre!", "I feel Pyre!", "u r using Pyre!"];
    var para = document.createElement("P");
    var t = document.createTextNode(list[random]);
    para.style.cssText = 'color: white; position: absolute; top: 10px; left: 320px; font-weight:bold';
    para.setAttribute("id", "water_pyer");
    para.appendChild(t);
    document.getElementsByClassName("common_gnb")[0].appendChild(para);
  }

}

addElement();
