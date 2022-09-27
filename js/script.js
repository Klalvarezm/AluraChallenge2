
function saveWord(){
    let textToSave=document.getElementById("wordToSave").value;
    var blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "./wordList.txt");
            console.log("Saludos");
}