var express     = require("express"),
    app         = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Hardcoded cards

var cards = [
    {
        imageURL: "http://source.unsplash.com/hpXX7cJXleE"
    },
    {
        imageURL: "http://source.unsplash.com/hLpsGTn-Urw"
    },
    {
        imageURL: "http://source.unsplash.com/RgplfXbxLFs"
    },
    {
        imageURL: "http://source.unsplash.com/rmLI9kg_ppE"
    },
    {
        imageURL: "http://source.unsplash.com/5ghcIBO6fag"
    },
    {
        imageURL: "http://source.unsplash.com/yssUhIxbUZA"
    },
    {
        imageURL: "http://source.unsplash.com/-Xv7k95vOFA"
    },
    {
        imageURL: "http://source.unsplash.com/bsU_7Ln2E2Y"
    },
    {
        imageURL: "http://source.unsplash.com/sNxC4EF1iB8"
    },
    {
        imageURL: "http://source.unsplash.com/9x3jGcu3qQ0"
    },
    {
        imageURL: "http://source.unsplash.com/JVkGUwTYQag"
    },
    {
        imageURL: "http://source.unsplash.com/HaMYaR9J-Zg"
    },
        {
        imageURL: "http://source.unsplash.com/lQ0gPL_0Bt8"
    },
    {
        imageURL: "http://source.unsplash.com/8BLozwvsmkM"
    },
    {
        imageURL: "http://source.unsplash.com/mqc_ocLIUYw"
    },
];


app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/game", function(req, res){
    var deck = compileDeck(15);
    res.render("game", {deck: deck});
});

// Compile a deck of n cards (eventually: from the deck(s) the user selects)
function compileDeck(n){
    return cards; //Placeholder
}

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Thosaigh an freastalaí.");
}); 