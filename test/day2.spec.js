import { getRowChecksum, getSpreadsheetChecksum } from '../src/day2';

describe('Checksum for row', () => {
	it('Returns 8', () => {
		expect(getRowChecksum('5	1	9	5')).toEqual(8);
	});
	it('Returns 4', () => {
		expect(getRowChecksum('7	5	3')).toEqual(4);
	});
	it('Returns 6', () => {
		expect(getRowChecksum('2	4	6	8')).toEqual(6);
	});
});

describe('Checksum for spreadsheet', () => {
	it('Returns 18', () => {
		expect(getSpreadsheetChecksum('5	1	9	5\n7	5	3\n2	4	6	8')).toEqual(18);
	});
});
