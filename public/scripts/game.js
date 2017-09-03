var HANDSIZE        = 7;
var SHOWSIZE        = 3;
var discard         = [];
var hand            = [];
var selectedCards   = [];
var displayCards    = document.querySelectorAll(".card img");
var draw            = JSON.parse(document.querySelector(".invisible").textContent);
var drawButton      = document.getElementById("drawButton");
var discardButton   = document.getElementById("discardButton");

init();

function init() {
    drawButton.addEventListener("click", function(){
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
}

function drawCards() {
    var handsize = HANDSIZE;
    if (draw.length < HANDSIZE) {
        handsize = draw.length;
    }
    
    for(var i =0; i < handsize; i++){
        hand.push(draw.pop());
    }
}

function refresh() {
    for(var i=0; i < displayCards.length; i++){
        if(hand[i]){
            displayCards[i].style.display = "inline";
            displayCards[i].src = hand[i].imageURL;
        } else {
            displayCards[i].style.display = "none";
        }
    }
}