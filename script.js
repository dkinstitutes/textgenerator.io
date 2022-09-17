let btn = document.querySelector('#btn');
let blockDisp = document.querySelector('#random');
let first = "This is a sample text generans to generate dummy text and paragraphs for developers and designers.";
let lines = [
  	"",
	"This is a sample text generans to generate dummy text and paragraphs for developers and designers.",
    "Ea uti potes ut exempli causa pro websites et aliis propositis tuis.",
    "Ponere potes quod voles.",
    "Copyright liberum text generantis.",
    "Suspendisse iaculis libero quis ante!"
];

function blockRequest() {
	let data = document.getElementById("options");
	let pnum = Number(data.querySelector("#pnum").value);
	let psize = Number(data.querySelector("input.psize:checked").value);
	let firstLine = document.getElementById("first").checked;

	blockRequest.createParagraph = function() {
	let size = psize;
	let paragraph = "";
		for (var i = 0; i < size; i++){
		paragraph += (lines[Math.floor(Math.random() * lines.length)] + " ");
		}
		return paragraph;
	};

	blockRequest.createBlock = function(numberOfParagraphs){
	let allParagraphs = [];
		if (firstLine === true){
		allParagraphs.push(first + " " + this.createParagraph());
		while (allParagraphs.length > 0 && allParagraphs.length < pnum) {
			allParagraphs.push(this.createParagraph());
		}
		} else {
		while (allParagraphs.length < pnum) {
			allParagraphs.push(this.createParagraph());
		}
		};
		let phtml = "";
		allParagraphs.forEach(function(p) {
		phtml += "<p>" + p + "</p>";
	});
		return phtml;
	};

	blockDisp.innerHTML= blockRequest.createBlock(pnum);
};

btn.addEventListener("click", blockRequest);