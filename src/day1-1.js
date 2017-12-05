export function matchingDigitsSum(input = 0) {
	// Add the first digit to the end to make the logic easier
	let digits = (input + input[0]);
	let sum = 0;

	const iterator = digits[Symbol.iterator]();
	let currentDigit = iterator.next();
	while(!currentDigit.done) {
		let nextDigit = iterator.next();
		if (nextDigit.value === currentDigit.value) {
			sum += parseInt(nextDigit.value, 10);
		}
		currentDigit = nextDigit;
	}

	return sum;
}
