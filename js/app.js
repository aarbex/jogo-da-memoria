//Declarações de variáveis
'use strict';
let card = $(".card");
let cards = [...card];
let iniciarJogo = false;
let cardsVirados = []; //
let numeroJogadas= 0;
let seg = 0;
let cardsEncontrados = 0;
let delay;
let cronometro;
let currentTimer;
let timer = document.querySelector('#timer');

//Criação de listeners de eventos para interatividade com o jogo 
$(function() {

    $('.card').click(game.selecionarCard);
    $('.restart').click(game.reset)
    game.initGame();

});

//criação do objeto Game com seus métodos
class Game{
    //funcção que inicia o jogo;
    initGame(){
        game.populateCards();
     }

    //função que verifica as duas cartas viradas em cada rodada são iguais.  
    verificaCardsVirados(cardsVirados){

      //  let cardsVirados = [];
        let card1 =  game.obterImagemDoCard(cardsVirados[0]);
        let card2 =  game.obterImagemDoCard(cardsVirados[1])

        if ( card1 === card2){
            cardsEncontrados++;
            cardsVirados.forEach(function(card){
                card.animateCss('tada', function(){
                    card.toggleClass("open show match");
                });
            });
        } else {
            cardsVirados.forEach(function(card){
                card.animateCss('shake', function(){
                    card.toggleClass("open show");
                });
            });
        }


        if (cardsEncontrados === 8){

            game.finalizarJogo()
        }        
        
    }
 
    //função que atualiza a quantidade de rodadas. 
    atualizarNumeroDeJogadas(){
        numeroJogadas++;        
        let numJogadas = $('.moves');
        numJogadas.text(numeroJogadas);
        if (numeroJogadas === 12 || numeroJogadas === 18 ){
            game.removeEstrela();
        }
    }
   
    //função que carrega as cartas, aleatóriamente, antes do jogo ou após seu reinício. 
    populateCards(){
        cards = game.shuffle(cards);
        for(var i=0; i<cards.length; i++) {
            document.querySelector(".deck").innerHTML = "";
            [].forEach.call(cards, function(item) {
                document.querySelector(".deck").appendChild(item);
            });
            //cards[i].classList.remove("show", "open", "match", "disabled");
        }
    }
    //função que embaralha os cards para que sejam diferentes em cada rodada.
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    }

    //função que remove as estrelas após determinado número de jogadas.
    removeEstrela(){
        let stars = $(".fa-star");
        $(stars[stars.length-1]).toggleClass("fa-star fa-star-o"); 
        
    }

    //função chamada após cada click nas cartas, responsável por atribuir as classes CSS necessárias para girar as cartas.
    selecionarCard(){

        let card= $(this);

        if (card.hasClass('open show') || card.hasClass("match")){
            return;
        }
        if (!iniciarJogo) {
            iniciarJogo = true;
            cronometro = setTimeout(game.iniciarCronometro(), 500);
        }

        if (cardsVirados.length < 2){
            $(this).toggleClass("open show");
            cardsVirados.push($(this));
        }

        if (cardsVirados.length === 2){
            //comando para pausar o evento click quando 2 cartas já estiverem viradas.
            $('.card').off('click');
            //comando para voltar o evento click após 1 segundo depois da verificação de igualdade das cartas, evitando assim que mais de 2 cartas sejam abertas simultaneamente.
            delay = setInterval(game.novaJogada, 1000);
            game.verificaCardsVirados(cardsVirados)
            cardsVirados = [];
            game.atualizarNumeroDeJogadas();            
        }
        
    }

    //função que retoma o evento click após ele ter sido interrompido na função anterior
    novaJogada(){
        $('.card').click(game.selecionarCard);
        game.limparIntervalo();
    }

    //funcção que limpa o intervalo do delay do evento click.
    limparIntervalo(){    
        clearInterval(delay);
    }

    //função que verifica qual a imagem da carta para poder compará-la posteriormente.
    obterImagemDoCard(card){
      return card[0].firstChild.nextSibling.classList[1];
    }

    //função que inicia o cronometro do jogo.
    iniciarCronometro() {
        currentTimer = setInterval(() => {
            timer.textContent= `${seg}`
            seg++;
        }, 1000);
    }

    //função chamada ao clicar no botão reset, responsável por limpar todas as variáveis e reiniciar o jogo.
    reset(){
        location.reload(currentTimer);
        let card = $(".card");
        let cards = [...card];
        let iniciarJogo = false;
        let cardsVirados = []; //
        let numeroJogadas= 0;
        let seg = 0;
        let cardsEncontrados = 0;
    }

    //função chamada após todas as cartas estarem em "match", apresentando um modal com o status do jogo após seu término.
    finalizarJogo(){
        let stars = $(".fa-star");
        clearInterval(currentTimer)
        swal({
            title: 'Parabéns',
            text: `Você terminou o jogo em  ${seg} segundos e com ${stars.length} de 3 estrelas.
            Deseja jogar novamente? `,
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#2A4B66',
            cancelButtonColor: '#FF231C',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.value) {
                setTimeout(game.reset, 500)
            }
          })
    }

}

//comando responsável por adicionar as animações quando as cartas são viradas e verificadas.
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });

        return this;
    }
});

//reinício do objeto Game para início de outra partida.
let game = new Game();