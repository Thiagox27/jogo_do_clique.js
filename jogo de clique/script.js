var pontos = 0;
var up = 1;
document.getElementById('upclique').innerHTML = up;
var botao = document.getElementById('somar');
var ifAtivado = false;
    


function clique(){
    pontos = pontos+up
    document.getElementById('pontos').innerHTML = pontos;
    if(pontos > 999 && !ifAtivado) {
        alert("Parabens"); ifAtivado = true;
    }
    if (botao.innerHTML == 'atirar') {
        document.getElementById('cont');
    }
}

function up01(){
    if (pontos > 9) {
        up = 2
        pontos = pontos - 10
        document.getElementById('up01').innerHTML = 'comprado';
        document.getElementById('pontos').innerHTML = pontos;
        document.getElementById('upclique').innerHTML = up;
    } else {
        alert('Não há pontos suficientes')
    }
}

function up02(){
    if (pontos > 50) {
        up = 8
        pontos = pontos - 10
        document.getElementById('up02').innerHTML = 'comprado';
        document.getElementById('pontos').innerHTML = pontos;
        document.getElementById('upclique').innerHTML = up;
    } else {
        alert('Não há pontos suficientes')
    }
}

function up03(){
    if (pontos > 200) {
        up = 16
        pontos = pontos - 10
        document.getElementById('up03').innerHTML = 'comprado';
        document.getElementById('pontos').innerHTML = pontos;
        document.getElementById('upclique').innerHTML = up;
    } else {
        alert('Não há pontos suficientes')
    }
}