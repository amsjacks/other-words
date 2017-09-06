var HANDSIZE            = 7;
var SHOWSIZE            = 3;
var discard             = [];
var hand                = [];
var selectedCards       = [];
var numCardsSelected    = 0;
var displayCards        = document.querySelectorAll(".card img");
var draw                = JSON.parse(document.querySelector(".invisible").textContent);
var drawButton          = document.getElementById("drawButton");
var discardButton       = document.getElementById("discardButton");

init();

function init() {
    drawButton.addEventListener("click", function(){
        hand = [];
        drawCards();
        refresh();
    });
    
    discardButton.addEventListener("click", function() {
       for(var i = 0; i < hand.length; i++){
            if(!displayCards.item(i).classList.contains("selected")) {
                discard.push(hand[i]);
            } else {
                selectedCards.push(hand[i]);
            }
        }
        hand = selectedCards;
        selectedCards = [];
        refresh(); 
    });
    
    // Listeners for each displayCard
    for(var i= 0; i < displayCards.length; i++){
        displayCards.item(i).addEventListener("click", function() {
            if(!this.classList.contains("selected") && numCardsSelected < SHOWSIZE) {
                this.classList.add("selected");
                numCardsSelected++;
            } else if (this.classList.contains("selected")) {
                this.classList.remove("selected");
                numCardsSelected--;
            }
        });
    }
}

function drawCards() {
    var handsize = HANDSIZE;
    if (draw.length < HANDSIZE) {
        handsize = draw.length;
    }
    
    for(var i =0; i < handsize; i++){
        var cardIndex = getRandomInt(0, draw.length - 1);
        console.log("Index selected: " + cardIndex); // For development/testing
        hand.push(draw[cardIndex]);
        draw.splice(cardIndex, 1);
    }
}

function refresh() {
    for(var i=0; i < displayCards.length; i++){
        if(displayCards[i].classList.contains("selected")) { 
            displayCards[i].classList.remove("selected");
        }
        numCardsSelected = 0;
        if(hand[i]){
            displayCards[i].style.display = "inline";
            displayCards[i].src = hand[i].imageURL;
        } else {
            displayCards[i].style.display = "none";
        }
    }
}

// Function pulled from MDN documentation
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}