import { matchingDigitsSum } from '../src/day1-1';

describe('Sum of matching digits', () => {
	it('Returns 3', () => {
		expect(matchingDigitsSum('1122')).toEqual(3);
	});
	it('Returns 4', () => {
		expect(matchingDigitsSum('1111')).toEqual(4);
	});
	it('Returns 0', () => {
		expect(matchingDigitsSum('1234')).toEqual(0);
	});
	it('Returns 9', () => {
		expect(matchingDigitsSum('91212129')).toEqual(9);
	});
});
