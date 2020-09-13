
function randomquotes( ) {
var quotes = [
				"this website is indeed very",
					"Ana is rather",
					"Jo's website will be at least as",
					"Yoda looked very",
					"Andreas' mom is extremely",
					"I wanted a pony but got a website that is",
					"Your reload button is also",
					"Sushi tends to be",
					"Unicorns are not at all",
					"Websites with Javascript can still be",
					"\"hello world\" is technically",
					"If you read this, you are",
					"Compared to Hume, Kant is empirically",
					"Your believes are rather",
					"A squared circle is geometrically",
					"User research for this page is totally"
			];
			var quote = quotes[Math.floor(Math.random() * quotes.length)];
			document.getElementById("caption").innerHTML = quote;
			
}


function eyecancer( ) {
document.body.classList.toggle("myeyes");
}

function getdollars( ) {
    var element = document.getElementById("canvas");
  element.classList.toggle("screenposition-dollars");
}
