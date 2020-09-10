
function randomquotes( ) {
var quotes = [
				"this website is indeed very",
					"Ana is rather",
					"Jo's website will be at least as",
					"Yoda looked very",
					"Your mom is pretty",
					"I wanted a pony but got a website that is",
					"Your reload button is also",
					"Sushi tends to be",
					"Unicorns are not at all",
					"Websites with Javascript can still be",
					"hello world, i am",
					"if you read this, you are"
			];
			var quote = quotes[Math.floor(Math.random() * quotes.length)];
			document.getElementById("caption").innerHTML = quote;
			
}


function eyecancer( ) {
document.body.classList.toggle("myeyes");
}