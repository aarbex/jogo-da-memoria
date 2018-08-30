/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
let card = $(".card");
let cartas = [];
let cartasViradas = [];
let cardsEncontrados = 0;

function shuffle(array) {
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



(function(){

    $(".card").click(girarCarta);

    function girarCarta(){

        if (cartas.length < 2){
            $(this).toggleClass("open show");
            cartas.push($(this));
        }

        if (cartas.length === 2){
            console.log('aqui');            
            compararCartas(cartas);
            //cardsVirados = [];
        }

    }

    function compararCartas(cartasViradas){

            let card1 =  obterCard(cartasViradas[0]);
            let card2 =  obterCard(cartasViradas[1]);
            
            if ( card1 === card2){
                cardsEncontrados++;
                cartasViradas.forEach(function(card){
                    card.animateCss('tada', function(){
                        card.toggleClass("open show match");
                });
            });
            } else {
                cartasViradas.forEach(function(card){
                    card.animateCss('shake', function(){
                    card.toggleClass("open show");
                    });
                });
            }

            cartas = [];
            
    }   

    function obterCard(cartaPega){
        return cartaPega[0].firstChild.nextSibling.classList[1];
    }
    
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

}())



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

