const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3, iscapital=false;
	let output="#";
	while (i<shortHex.length) {
		let asciiCode=shortHex[i].charCodeAt(0);
		if (asciiCode>=65 && asciiCode<=90) {
			//capital any one letter
			iscapital=true;
			
		}
		output += shortHex[i]+shortHex[i];//op=#+a+a
		i++;
		
	}
	return iscapital ? output.toUpperCase() : output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
