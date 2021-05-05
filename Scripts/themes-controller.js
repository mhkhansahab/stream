const collapser = document.getElementsByClassName("collapser");
const tile = document.getElementsByClassName("tile");
const leftNav = document.getElementsByClassName("main-li");
const rightNav = document.getElementsByClassName("drawer-li");
const addBtn = document.getElementById("icon-container");
const message = document.getElementById("message");


function switchToAqua(){
    const spans = document.getElementsByTagName("span");
    const icons = document.getElementsByTagName("i");
    spans.item(0).style.color = "#FFFFFF";
    spans.item(1).style.color = "#FFFFFF";
    spans.item(4).style.color = "#FFFFFF";

    icons.item(1).style.color = "#FFFFFF";
    icons.item(3).style.color = "#FFFFFF";
   
    document.body.style.background = "#caf0f8";
    collapser[0].style.background = "#023e8a";
    leftNav[0].style.background = "#03045e";
    rightNav[0].style.background = "#0096c7";
    addBtn.style.background = "#03045e";
    message.style.color = "	#000000";
    try{
        for(i = 0; i < tile.length; i++){
            tile[i].style.background = "#0096c7";
        }
    }catch{}
    
}
function switchToDark(){
    const spans = document.getElementsByTagName("span");
    const icons = document.getElementsByTagName("i");
    spans.item(0).style.color = "#FFFFFF";
    spans.item(1).style.color = "#FFFFFF";
    spans.item(4).style.color = "#FFFFFF";

    icons.item(1).style.color = "#FFFFFF";
    icons.item(3).style.color = "#FFFFFF";
   
    document.body.style.background = "#18191a";
    collapser[0].style.background = "#242526";
    leftNav[0].style.background = "#242526";
    rightNav[0].style.background = "#3a3b3c";
    addBtn.style.background = "#18191a";
    message.style.color = "#FFFFFF";
    try{
        for(i = 0; i < tile.length; i++){
            tile[i].style.background = "#3a3b3c";
        }
    }catch{}
}
function switchToLight(){
    const spans = document.getElementsByTagName("span");
    const icons = document.getElementsByTagName("i");
    spans.item(0).style.color = "#1877f2";
    spans.item(1).style.color = "#1877f2";
    spans.item(4).style.color = "#1877f2";

    icons.item(1).style.color = "#1877f2";
    icons.item(3).style.color = "#1877f2";
    
    document.body.style.background = "#f0f2f5";
    collapser[0].style.background = "#ffffff";
    leftNav[0].style.background = "#ffffff";
    rightNav[0].style.background = "#f0f2f5";
    addBtn.style.background = "#1877f2";
    message.style.color = "#1877f2";
    try{
        for(i = 0; i < tile.length; i++){
            tile[i].style.background = "#1877f2";
        }
    }catch{}
}