var HANDSIZE        = 7;
var SHOWSIZE        = 3;
var discard         = [];
var hand            = [];
var displayCards    = document.querySelectorAll(".card");
var draw            = JSON.parse(document.querySelector(".invisible").textContent);
var drawButton      = document.getElementById("drawButton");
var discardButton   = document.getElementById("discardButton");