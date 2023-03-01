
var on = window.document.getElementById('lamp')
var out = window.document.getElementById('lamp')
var break1= window.document.getElementById('lamp')

function ligar(){
    on.src="./img/on.png";
}
function apagar(){
    out.src="./img/off.png";
}
function piscar(){ //eventos de sincronização
    var intervalo = 0;
    var contador = 0;
        while(contador < 10){
            intervalo += 100;
            setTimeout("document.getElementById('lamp').src='./img/on.png';",intervalo)
            intervalo += 100;
            setTimeout("document.getElementById('lamp').src='./img/off.png';",intervalo)
            contador++;
        }
}
function quebrar(){
    break1.src="./img/break.png";
}