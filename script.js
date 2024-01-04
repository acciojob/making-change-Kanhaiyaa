const makeChange = (c) => {
  // your name here
	const pennyVal=0.01;
	const nickelVal=0.05;
	const dimeVal=0.10;
	const quaterVal=0.25

// initialize the values
	let quarter=0;
	let pennys=0;
	let dimes=0;
	let nickels=0

	// calculate ther number of quarter
	 quarters=Math.floor(c/quaterVal)
      c %=quaterVal

	nickels=Math.floor(c/nickelVal)
	c %=nickelVal

	dimes=Math.floor(c/dimeVal)
	c %=dimeVal

	pennys=Math.round(c/pennyVal)

	const result ={
		"q":quarters,
		"d":dimes,
		"n":nickels,
		"p":pennys
	
	}
	return result
	
};

console.log(makeChange(47))

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));






