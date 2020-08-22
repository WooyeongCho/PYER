function addElement () {
  let elementExists = document.getElementById("water_pyer");
  if(!elementExists) {  
    let list = ["Pyer is the fire!", "Pyer!", "I feel Pyer!", "Fire!", 'I love sans!'];
    let random = Math.floor((Math.random() * list.length));
    let para = document.createElement("P");
    let t = document.createTextNode(list[random]);
    para.style.cssText = 'color: white; position: absolute; top: 10px; left: 320px; font-weight:bold;-webkit-user-drag: none;-webkit-user-select: none;';
    para.setAttribute("id", "water_pyer");
    para.appendChild(t);
    document.getElementsByClassName("common_gnb")[0].appendChild(para);
  }
}

addElement();
