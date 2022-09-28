var palabraSeleccionada = JSON.parse(localStorage.getItem('palabraElegida'));
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
window.devicePixelRatio=4; 
ctx.font ='25px Arial';
ctx.fillStyle='DeepSkyBlue';
console.log("TEST: ",palabraSeleccionada);
var hiddenText="";
//Space to hide text
for (let i=0;i<palabraSeleccionada.length;i++){
    
    hiddenText+="_";
}

for(let i=0;i<palabraSeleccionada.length;i++){
    ctx.fillText(hiddenText[i],5+(i*20),25);
}

function checkWord(letter){
    let tempText=hiddenText.split('');
    let letterIndex=[];
    let toDisplayText="";
    if(palabraSeleccionada.toLowerCase().includes(letter)){
        for(let i=0;i<palabraSeleccionada.length;i++){
            if(palabraSeleccionada[i].toLowerCase()===letter){
                letterIndex.push(i);
            }
        }
        for(let i=0;i<letterIndex.length;i++){
           tempText[letterIndex[i]]=letter;      
        }
        hiddenText=tempText.join("");
        console.log("Prueba: ",tempText);
        console.log("Testing resultado: ",hiddenText);
        toDisplayText=hiddenText.toUpperCase();
        for(let i=0;i<palabraSeleccionada.length;i++){
            ctx.fillText(toDisplayText[i],5+(i*20),25);
        }
        console.log("Letra: ",letter," Existe");
        console.log("Positions: ",letterIndex);
    }
    else{
        console.log("La letra no esta");
    }
}