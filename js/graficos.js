var mainMenuButton = document.getElementById('toMainMenu');
mainMenuButton.style.display = 'none';
var restartButton = document.getElementById('GameRestart');
restartButton.style.display = 'none';



var palabraSeleccionada = JSON.parse(localStorage.getItem('palabraElegida'));
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
window.devicePixelRatio=4; 
ctx.font ='50px Arial';
ctx.fillStyle='#0A3871';
var hiddenText="";
var lives=7;
ctx.lineWidth = 10;
ctx.strokeStyle = "#6E260E";
ctx.beginPath();
ctx.moveTo(canvas.width*0.35, canvas.height*0.20);
ctx.lineTo(canvas.width*0.65, canvas.height*0.20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width*0.4, canvas.height*0.20);
ctx.lineTo(canvas.width*0.4, canvas.height*0.80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width*0.30, canvas.height*0.80);
ctx.lineTo(canvas.width*0.50, canvas.height*0.80);
ctx.stroke();

ctx.strokeStyle = "#FFC300";
//Space to hide text
for (let i=0;i<palabraSeleccionada.length;i++){
    
    hiddenText+="_";
}

for(let i=0;i<palabraSeleccionada.length;i++){
    ctx.fillText(hiddenText[i],10+(i*40),50);
}

function restartGame(){
    window.location.reload();
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
            ctx.fillText(toDisplayText[i],10+(i*40),50   );
        }
        console.log("Letra: ",letter," Existe");
        console.log("Positions: ",letterIndex);
        if(hiddenText===palabraSeleccionada.toLowerCase()){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText('👨‍💻👨‍💻Felicidades👨‍💻👨‍💻', (canvas.width*0.10), canvas.height*0.2)
            ctx.fillText('🕵🏻 Has Ganado 🕵🏻', (canvas.width*0.15), canvas.height*0.4)
            restartButton.style.display = 'inline-block';
            mainMenuButton.style.display = 'inline-block';
        }
    }
    else{
        lives=lives-1;
        //Head
        if(lives==6){
            ctx.fillText('😔', canvas.width*0.6, canvas.height*0.30) 
        }
        //Torso
        if (lives==5){
            ctx.beginPath();
            ctx.moveTo(canvas.width*0.65, canvas.height*0.32);
            ctx.lineTo(canvas.width*0.65, canvas.height*0.60);
            ctx.stroke();
        }
        //left hand
        if (lives==4){
            ctx.beginPath();
            ctx.moveTo(canvas.width*0.65, canvas.height*0.35);
            ctx.lineTo(canvas.width*0.50, canvas.height*0.50);
            ctx.stroke();
            ctx.fillText('🖐', canvas.width*0.48, canvas.height*0.52) //Hand
        }
        //right hand
        if (lives==3){
            ctx.beginPath();
            ctx.moveTo(canvas.width*0.65, canvas.height*0.35);
            ctx.lineTo(canvas.width*0.75, canvas.height*0.50);
            ctx.stroke();
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.fillText('🖐', (canvas.width*0.22), canvas.height*0.52) //Hand
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
        }
        //left leg
        if (lives==2){
            ctx.beginPath();
            ctx.moveTo(canvas.width*0.65, canvas.height*0.60);
            ctx.lineTo(canvas.width*0.58, canvas.height*0.78);
            ctx.stroke();
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.fillText('🥾', (canvas.width*0.36), canvas.height*0.78) 
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
        }
        //Right Leg
        if(lives==1){
            ctx.beginPath();
            ctx.moveTo(canvas.width*0.65, canvas.height*0.60);
            ctx.lineTo(canvas.width*0.72, canvas.height*0.78);
            ctx.stroke();
            ctx.fillText('🥾', (canvas.width*0.68), canvas.height*0.78)
        }

        if(lives==0){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText('☠️', (canvas.width*0.45), canvas.height*0.2);
            ctx.fillText('🚨 JUEGO TERMINADO 🚨', (canvas.width*0.02), canvas.height*0.4);
            alert("La palabra era: "+palabraSeleccionada +"\nIntenta Nuevamente!");
            restartButton.style.display = 'inline-block';
            mainMenuButton.style.display = 'inline-block';
        }
    }
}