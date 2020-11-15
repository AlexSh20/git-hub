function todayDate(){
    let daytime = new Date();
    alert("Сегодня " + daytime);
}

function formText(){
    event.preventDefault();
    let fontSize = document.getElementById("fontSize").value;
    let fontColor = document.getElementById("fontColor").value;
    
    let paragraph = document.getElementsByClassName('javaPrimer');
    
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.fontSize = fontSize + "px";
        paragraph[i].style.color = fontColor;
    }

}
