function setup() {

	const amount = 144;
	const diameter = 5;
	const space = 0.5;
	const margin = 50;
	let number = 1;

	createCanvas(amount * (diameter + space) - space + 2 * margin, amount * (diameter + space) - space + 2 * margin);
	background(255);
	fill(0, 0, 0);
	stroke(255, 255, 255);
	for (let y = 0; y < amount; y++) {
		for (let x = 0; x < amount; x++) {
			if (isPrime(number)) {
				xCord = margin + x * (diameter + space);
				yCord = margin + y * (diameter + space);
				ellipse(xCord, yCord, diameter);
			}
			number++;
		}
	}
}

function isPrime(num) {
	for (let i = 2; i <= sqrt(num); ++i) {
		if (num % i === 0) return false;
	}
	return num !== 1 && num !== 0;
}