var rps = require("../homework.js")

describe("recursive and iterative problem set", function() {
	it("gives the sum of a range using given number", function() {
		expect(rps.sumOfARangeIterative(5)).toEqual(15)
		expect(rps.sumOfARangeRecursive(5)).toEqual(15)
		expect(rps.sumOfARangeIterative(-1)).toEqual('not a valid input')
	});
	it("gives the result of a number to a certain power", function() {
		expect(rps.powerIterative(3,4)).toEqual(81)
		expect(rps.powerRecursive(3,4)).toEqual(81)
	});
})