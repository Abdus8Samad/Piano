const piano = document.querySelector("div.piano");
var left = 1.5;
var bool1 = true;
var bool2 = true;
var cnt = 0;
var blackKeyNumber = 2;
var keyNumbers = [];
for(var x=1;x<=88;x++){
    keyNumbers.push(x);
}
for(var x=1;x<=36;x++){
    let blackKey = document.createElement("div");
    blackKey.classList.add("blackKeys");
    blackKey.setAttribute("data-key",blackKeyNumber);
    piano.appendChild(blackKey);
    blackKey.style.left = left + "%";
    cnt++;
    keyNumbers = keyNumbers.filter(elem => elem !== blackKeyNumber);
    if(x%5 == 0){
        blackKeyNumber += 2;
    } else {
        bool2 ? blackKeyNumber += 3 : blackKeyNumber += 2;
        bool2 = !bool2;
    }
    if(x === 1){
        left+=3.5;
        cnt--;
    } else if(bool1 ? cnt%2 === 0 : cnt%3 === 0) {
        left += 3.3;
        bool1 = !bool1;
        cnt=0;
    } else {
        left+=2.28;
    }
}
for(var x=0;x<52;x++){
    var div = document.createElement("div");
    div.classList.add("whiteKeys");
    div.setAttribute('data-key',keyNumbers[x]);
    piano.appendChild(div);
}
