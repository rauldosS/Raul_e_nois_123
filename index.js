var tabela = new Array(
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
);

var jogador1 = "X";
var jogador2 = "O";
var deu_velha = false;
jogadorDaVez = " ";
jogadaDaVez = "X";
var jogadas = 0;

function jogada(bloco){
  blocoDaJogada = document.getElementById(bloco).innerHTML;
  if ( blocoDaJogada == "X" || blocoDaJogada == "O"){
    alert("Jogada inválida, está posição já esta ocupada.");
  } else {
    document.getElementById(bloco).innerHTML = jogadaDaVez;
    if(jogadaDaVez == "X"){
      jogadaDaVez = jogador2;
      jogadorDaVez = "Jogador 1";
      document.getElementById("jogador").innerHTML = jogadaDaVez;
    }else{
      jogadaDaVez = jogador1;
      jogadorDaVez = "Jogador 2";
      document.getElementById("jogador").innerHTML = jogadaDaVez;
    }
  }
}

function pegaValor(){
  jogadas++;
  tabela[0][0] = document.getElementById('bloco00').innerText;
  tabela[0][1] = document.getElementById('bloco01').innerText;
  tabela[0][2] = document.getElementById('bloco02').innerText;
  tabela[1][0] = document.getElementById('bloco10').innerText;
  tabela[1][1] = document.getElementById('bloco11').innerText;
  tabela[1][2] = document.getElementById('bloco12').innerText;
  tabela[2][0] = document.getElementById('bloco20').innerText;
  tabela[2][1] = document.getElementById('bloco21').innerText;
  tabela[2][2] = document.getElementById('bloco22').innerText;
}

function verificaVitoria(){
  pegaValor();
  
  if (jogadas >= 5) {
    if( 
      ((tabela[0][0] != '') && (tabela[0][1] != '' ) && (tabela[0][2] != '' ) && (tabela[0][0] == tabela[0][1]) && (tabela[0][1] == tabela[0][2])) ||
      ((tabela[1][0] != '') && (tabela[1][1] != '' ) && (tabela[1][2] != '' ) && (tabela[1][0] == tabela[1][1]) && (tabela[1][1] == tabela[1][2])) ||
      ((tabela[2][0] != '') && (tabela[2][1] != '' ) && (tabela[2][2] != '' ) && (tabela[2][0] == tabela[2][1]) && (tabela[2][1] == tabela[2][2])) ||
      ((tabela[0][0] != '') && (tabela[1][0] != '' ) && (tabela[2][0] != '' ) && (tabela[0][0] == tabela[1][0]) && (tabela[1][0] == tabela[2][0])) ||
      ((tabela[0][1] != '') && (tabela[1][1] != '' ) && (tabela[2][1] != '' ) && (tabela[0][1] == tabela[1][1]) && (tabela[1][1] == tabela[2][1])) ||
      ((tabela[0][2] != '') && (tabela[1][2] != '' ) && (tabela[2][2] != '' ) && (tabela[0][2] == tabela[1][2]) && (tabela[1][2] == tabela[2][2])) ||
      ((tabela[0][0] != '') && (tabela[1][1] != '' ) && (tabela[2][2] != '' ) && (tabela[0][0] == tabela[1][1]) && (tabela[1][1] == tabela[2][2])) ||
      ((tabela[0][2] != '') && (tabela[1][1] != '' ) && (tabela[2][0] != '' ) && (tabela[0][0] == tabela[1][1]) && (tabela[1][1] == tabela[2][0])) 
    ){
    alert("Parabéns " + jogadorDaVez + " você venceu");

    novoJogo();
    } else if (jogadas >= 9 ) {
      alert("Deu velha!");
      novoJogo();
    }
  }
} 

function novoJogo(){
  jogadas = 0;
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      nomeBloco = 'bloco' + i + j;  
      document.getElementById(nomeBloco).innerHTML="";  
      tabela[i][j] = "";
    }
  }
}



  // if(
  //   ((tabela[0][0] && tabela[0][1] && tabela[0][2]) != '') && (tabela[0][0] == tabela[0][1]) && (tabela[0][1] == tabela[0][2]) ||
  //   ((tabela[0][0] && tabela[1][1] && tabela[2][2]) != '') && (tabela[0][0] == tabela[1][1]) && (tabela[1][1] == tabela[2][2]) ||
  //   ((tabela[0][0] && tabela[0][1] && tabela[0][2]) != '') && (tabela[0][0] == tabela[0][1]) == (tabela[0][1] == tabela[0][2]) ||

  //   ((tabela[0][2] && tabela[1][1] && tabela[2][0]) != '') && (tabela[0][2] == tabela[1][1]) == (tabela[1][1] == tabela[2][0]) ||
  //   ((tabela[0][2] && tabela[2][2] && tabela[2][2]) != '') && (tabela[0][2] == tabela[1][2]) == (tabela[1][2] == tabela[2][2]) ||

  //   ((tabela[2][2] && tabela[2][1] && tabela[2][0]) != '') && (tabela[2][2] == tabela[2][1]) == (tabela[2][1] == tabela[2][0]) ||
    
  //   ((tabela[0][1] && tabela[1][1] && tabela[2][1]) != '') && (tabela[0][1] == tabela[1][1]) == (tabela[1][1] == tabela[2][1]) ||
  //   ((tabela[1][0] && tabela[1][1] && tabela[2][1]) != '') && (tabela[2][2] == tabela[2][1]) == (tabela[2][1] == tabela[2][0]) ) {      

  //   alert("Parabéns " + jogadorDaVez + " você venceu");

  //   novoJogo();
  // } 