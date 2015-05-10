module.exports = {
	singSongIterative: function(num) {
		for(var i = num; i >=0; i--) {
			if (i > 1) {
				console.log(i + " bottles of beer on the wall " + i + " bottles of beeeeeeeer - take one down, pass it around " + (i - 1) + " bottles of beer on the wall!");
			}
			else if (i === 1) {
				console.log(i + " bottle of beer on the wall " + i + " bottle of beeeeeeeer - take one down, pass it around no more bottles of beer on the wall!");
			}
			else {
				console.log("Shoot! Where did all the beer go?!");
			}
		}
	},
singSongRecursive: function(num) {
	if(num === 0) {
		return "No more bottles of beer on the wall!"
	}
	if(num === 1) {
		console.log(num + " bottle of beer on the wall, " + num + " bottle of beeeeer - take one down, pass it around " + (num - 1) + " no bottles of beer on the wall!")
		return singSong(num - 1)
	}
	else {
		console.log(num + " bottles of beer on the wall, " + num + " bottles of beeeeer - take one down, pass it around, no more bottles of beer on the wall!")
		return singSong(num - 1)
	}
	},
	sumOfARangeIterative: function(x) {
	var total = 0;
	if(x < 0) {
		return "not a valid input";
	}
	for(var i = x; i > 0; i--) {
		total += i
	}
	return total;
	},
	sumOfARangeRecursive: function(x) {
	if(x === 0) {
		return 0;
	}
	else {
		return x + this.sumOfARangeRecursive(x - 1)
	}
	},
	powerIterative: function(base, exp) {
	var newTotal = 1;
	for(var i = exp; i > 0; i--) {
		newTotal *= base;
	}
	return newTotal;
	},

// Raise a number to a certain power: Recursive
// Version 1:
// this was giving me problems - so I had to look up the answer, which is in version 2 below:
// function power(base, exp) {
//	if(exp === 0) {
//		return 1;
//	}
//	else {
//		return base * power(exp - 1);
//	}
//	}

// Version 2:
// I understand now that to run the recursive function, we need to put in BOTH of the parameters.
// If I don't put the "base" in the parameter, then exp - 1 will be used as the base parameter (thus giving the wrong answer)
	powerRecursive: function(base, exp) {
		if(exp === 0) {
			return 1;
		}
		else {
			return base * this.powerRecursive(base, exp - 1);
		}
	}
}
// Here is a mapped out version of what is happening (I think):
// power(3,4)

// 3 * power(3, 3)
//	3 * power(3, 2)
//		3 * power(3, 1)
//			1
//		9
//	27

// 81

// But what I am confused about is HOW we know to multiply the values in the power parameters -
// For example, how do we know to multiply the (3, 1) in line 90 if it's not explicitly stated?




