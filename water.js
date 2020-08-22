function addElement () {
  let elementExists = document.getElementById("water_pyer");
  if(!elementExists) {  
    let list = ["Pyer is the fire!", "Pyer!", "I feel Pyer!", "Fire!", 'Love the dark.'];
    let random = Math.floor((Math.random() * list.length));
    // let para = document.createElement("P");
    // let t = document.createTextNode(list[random]);
    // para.style.cssText = 'color: white; position: absolute; top: 10px; left: 320px; font-weight:bold;-webkit-user-drag: none;-webkit-user-select: none;';
    // para.setAttribute("id", "water_pyer");
    // para.appendChild(t);
    // document.getElementsByClassName("common_gnb")[0].appendChild(para);
    var header = document.getElementsByClassName( 'common_gnb' )[0];
    var str = `
    <div id="water_pyer" style="float: left; margin-left:20px; margin-top:4px;">
      <span style="color:white; font-size: 16px; font-weight:bold;">${"Pyer!"}</span> 
      <span style="color:#787878; font-size: 14px; float: right; margin-left:10px; margin-top:2px; font-weight:bold;">개발 <a href="https://github.com/WooyeongCho" style="color:#d34aff;" target="_blank">wy24</a> 도움 <a href="https://github.com/thoratica" style="color:#d34aff;" target="_blank">thoratica</a></span>
    </div>`;
    
    header.insertAdjacentHTML( 'beforeend', str );
  }
}
addElement();
