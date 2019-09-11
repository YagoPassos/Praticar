// var nome = window.prompt("Qual seu nome?");
//  window.alert("Nome é = " + nome);

// ---------------------------------------------------------------------------------------------
//  var n1 = Number( window.prompt("1 numero: "));
//  var n2 = Number( window.prompt("2 numero: "));

// ---------------------------------------------------------------------------------------------

// window.alert("Soma: " + (n1 + n2));

// ---------------------------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


var bg = document.getElementById('teste1');


bg.addEventListener('mouseenter', entrar);
bg.addEventListener('mouseout', sair);
bg.addEventListener('click', clicar);

function clicar() {
    var bg = document.getElementById('teste1');

    bg.style.backgroundColor = 'rgb(0, 4, 53)';
}

function entrar() {
    var bg = document.getElementById('teste1');

    bg.innerText = 'IN';
}

function sair() {
    var bg = document.getElementById('teste1');

    bg.innerText = 'OUT';
}

// ---------------------------------------------------------------------------------------------

function somar() {
    var s1 = Number(document.querySelector('#n1').value);
    var s2 = Number(document.querySelector('#n2').value);
    var res = document.querySelector('.txt');
    var soma = s1 + s2;


    res.innerHTML = '  Número ' + soma;

    if (soma % 2 === 0) {
        console.log('par');

        res.innerHTML += '<br>o número ' + soma + ' é par ';
    }
    else {
        console.log('impar');

        res.innerHTML += '<br>o número ' + soma + ' é impar ';
    }

}


// ---------------------------------------------------------------------------------------------

var hora = new Date();
var hrs = document.querySelector('.hrs');

hrs.innerHTML = ' ' + hora.getHours() + ' : ' + hora.getMinutes() + ' : ' + hora.getSeconds() + ' <br> ' + hora.getUTCDay() + '/' + hora.getUTCMonth() + '/' + hora.getFullYear() + '';

// ---------------------------------------------------------------------------------------------


function colorChange() {

    var rbtn = document.querySelector('#rbtn');

    switch (Number(rbtn.rb.value)) {

        case 1:
            var hrs = document.querySelector('.hrs');
            // hrs.style.width = '25%';
            function mudar (){
                hrs.style.transitionDuration = '1000ms';
            hrs.style.backgroundColor = 'blue';
            }
            hrs.addEventListener ('mouseenter', mudar);
            break;

        case 2:
            var hrs = document.querySelector('.hrs');
            // hrs.style.transform = 'rotate(180deg)';
            // hrs.style.width = '55%';
            hrs.style.transitionDuration = '1000ms';
            hrs.style.backgroundColor = 'red';       
            break;

        case 3:
            var hrs = document.querySelector('.hrs');
            // hrs.style.transform = 'rotate(270deg)';
            hrs.style.width = '75%';
            hrs.style.transitionDuration = '1000ms';
            hrs.style.backgroundColor = 'white';
            
            break;
    }

}
// ---------------------------------------------------------------------------------------------

var ubd = [
    ['user1', 1],
    ['user2', 2],
    ['user3', 3],
    ['user4', 4],
    ['user5', 5],
];

btn.onclick = function validar() {
    var user = document.querySelector('#user').value;
    var password = Number(document.querySelector('#password').value);

    var x = 0;
    for (var i = 0; i < ubd.length; i++) {
        if (user == ubd[i][0] && password == ubd[i][1]) {
            alert('Login realizado com sucesso!')
            x = 1;
        }
    }
    if (x == 0) {
        alert('Usuário ou senha incorretos, tente novamente.');
    }
}

cad.onclick = function cadastrar() {
    var user = document.querySelector('#user').value;
    var password = Number(document.querySelector('#password').value);

    var x = 0;

    for (var i = 0; i < ubd.length; i++) {
        if (user == ubd[i][0]) {
            alert('O usuário já existe, tente novamente!')
            x = 1;
            break;
        }
    }
    if (x == 0) {
        ubd.push([user, password]);
        alert('Usuário cadastrado com sucesso!')
    }
}


//Jogo da velha ---------------------------------------------------------------------------------------------

const jogo_da_velha = {
    casas: ['', '', '', '', '', '', '', '', '',],

    simbolos: {
        opcoes: ['X', 'O'],
        muda_jogador: 0,

        mudar: function () {
            this.muda_jogador = (this.muda_jogador === 0 ? 1 : 0);
        },
    },

    tabuleiro: null,
    game_over: false,

    sequencia_vitoria: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],

    x: '',
    o: '',
    
    criar_tabuleiro: function (tabuleiro) {
        this.tabuleiro = tabuleiro;
    },
    contX: 0,
    contO: 0,

    jogada: function (posicao) {
        if (this.game_over) return false;
        if (this.casas[posicao] === '') {

            this.casas[posicao] = this.simbolos.opcoes[this.simbolos.muda_jogador];
            this.iniciar();


            let sequencia_vitoria_index = this.checar_sequencia_vitoria(this.simbolos.opcoes[this.simbolos.muda_jogador]);
            if (sequencia_vitoria_index >= 0) {
                this.fim_de_jogo();
            
               
                if (this.simbolos.opcoes[this.simbolos.muda_jogador] === this.simbolos.opcoes[0]){
                    var x = document.querySelector('#x');
                    jogo_da_velha.contX++;
                    x.innerHTML = ('X <br>'+ jogo_da_velha.contX);
                }
                else{
                    var o = document.querySelector('#o');
                    jogo_da_velha.contO++;
                    o.innerHTML = ('O <br>'+jogo_da_velha.contO);
                }
            } else {
                this.simbolos.mudar();
            }
            return true;
        }
        else {
            return false;
        }

    },

    fim_de_jogo: function (){
        this.game_over = true;
    },

    checar_sequencia_vitoria: function (simbolo) {

        for (i in this.sequencia_vitoria) {
            if (this.casas[this.sequencia_vitoria[i][0]] == simbolo &&
                this.casas[this.sequencia_vitoria[i][1]] == simbolo &&
                this.casas[this.sequencia_vitoria[i][2]] == simbolo) {
                return i;
            }
        }
    },

    iniciar: function () {
        let conteudo = '';

        for (casa in this.casas) {
            conteudo += '<div onclick="jogo_da_velha.jogada(' + casa + ')" >' + this.casas[casa] + '</div>';
        }

        this.tabuleiro.innerHTML = conteudo;

    },

    restart: function(){
        this.casas.fill('');
        this.iniciar();
        this.game_over = false;
    },

}