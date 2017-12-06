export function getRowChecksum(row) {
	let smallest;
	let largest;

	let values = row.split('\t').map(value => parseInt(value, 10));

	values.forEach(value => {
		if (!smallest || value < smallest) smallest = value;
		if (!largest || value > largest) largest = value;
	});

	return largest - smallest;
}

export function getSpreadsheetChecksum(spreadsheet) {
	let sum = 0;

	const rows = spreadsheet.split('\n');

	sum = rows.reduce((sum, row) => sum + getRowChecksum(row), 0);
	return sum;
}
