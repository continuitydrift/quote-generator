var quotes = [
	"God keep me from ever finishing anything. -Herman Melville",
	"The meaning of my book nothing, the drift everything. -Walt Whitman",
	"A fool, a fool! I met a fool in the forest. -William Shakespeare",


	]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}