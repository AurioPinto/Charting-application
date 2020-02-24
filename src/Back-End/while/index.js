
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Get request received at '/' ");
});

app.listen(3000, function(){
console.log('Listening on Port 3000');
});


// GET /quotes

var quotes = [
{
    id: 1,
    quote: "The best is yet to come",
    author: "Unknown",
    year: 2000
},
{
    id: 2,
    quote: "This is a quote",
    author: "ApDevice",
    year: 1930
},
{
    id: 3,
    quote: "This is another quote",
    author: "First2 Last2",
    year: 1910
}
];

// GET /quotes route is defined as:

app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    res.json(quotes);
});

// if(req.query.year){
//       res.send("Return a list of quotes from the year: " + req.query.year);
//     }
//     else{
//         res.json(quotes);
// }
