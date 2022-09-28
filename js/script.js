
//Lista palabras
var listaPalabras=["HTML","CSS","Javascript","Java","POO","Frontend","Backend",
"Alura","Desarrollo","Software"]

//localStorage.setItem('palabras',JSON.stringify(listaPalabras));
//Esto no sirve para nada aun

function saveWord(){
    let textToSave=document.getElementById("wordToSave").value;
    listaPalabras.push(textToSave);
    localStorage.setItem('palabras',JSON.stringify(listaPalabras));
    alert("Tu palabra se ha agregado correctamente");
    location.reload();
    return false;
}

var chosenWord="";
function loadWord(){
    let wordList = JSON.parse(localStorage.getItem('palabras'));
    if(wordList==null){
        chosenWord=listaPalabras[Math.floor(Math.random()*listaPalabras.length)];    
        console.log("Palabra elegida: ",chosenWord);
        localStorage.setItem('palabraElegida',JSON.stringify(chosenWord.toLowerCase()))   
    }
    else{
        chosenWord=wordList[Math.floor(Math.random()*wordList.length)];
        console.log(wordList);
        console.log("Palabra elegida: ",chosenWord);
        localStorage.setItem('palabraElegida',JSON.stringify(chosenWord.toLowerCase()))   
    }
    
}


