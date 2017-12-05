import { matchesNextDigitSum, matchesFarthestDigitSum } from '../src/day1';

describe('Sum of matching digits', () => {
	it('Returns 3', () => {
		expect(matchesNextDigitSum('1122')).toEqual(3);
	});
	it('Returns 4', () => {
		expect(matchesNextDigitSum('1111')).toEqual(4);
	});
	it('Returns 0', () => {
		expect(matchesNextDigitSum('1234')).toEqual(0);
	});
	it('Returns 9', () => {
		expect(matchesNextDigitSum('91212129')).toEqual(9);
	});
});

describe('Sum of farthest matching digits', () => {
	it('Returns 6', () => {
		expect(matchesFarthestDigitSum('1212')).toEqual(6);
	});
	it('Returns 0', () => {
		expect(matchesFarthestDigitSum('1221')).toEqual(0);
	});
	it('Returns 4', () => {
		expect(matchesFarthestDigitSum('123425')).toEqual(4);
	});
	it('Returns 12', () => {
		expect(matchesFarthestDigitSum('123123')).toEqual(12);
	});
	it('Returns 4', () => {
		expect(matchesFarthestDigitSum('12131415')).toEqual(4);
	});
});
