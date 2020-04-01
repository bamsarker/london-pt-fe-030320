/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */
const isEqual = (num1,
    num2) => (num1 === num2);

console.log(isEqual(3, 3));

/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */

const isLessOrEqual0 = number => (number <= 0);
console.log(isLessOrEqual0(-3))

/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */

const timeToSeconds = (hours = 0, minutes = 0) => {
    let seconds = (hours * 60 * 60) + (minutes * 60);
    return seconds
}
console.log(timeToSeconds(1, 30));

/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */

const isGameWorthTheCandle = (probability = 0, prize = 0, pay = 0) =>
    ((probability * prize) > pay);
console.log(isGameWorthTheCandle(2, 1, 5));


/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */

const longerString = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1
    } else if (string1.length < string2.length) {
        return string2
    } else {
        return "Equal!"
    }
}

console.log(longerString("benny", "benny"));
// Exercise 1
describe("isEqual", () => {
	test("isEqual is declared and has type function", () => {
		expect(typeof isEqual).toEqual("function");
	});

	test("isEqual is an arrow function", () => {
		const isArrowFunction = isEqual.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("isEqual compare correctly", () => {
		expect(isEqual(2, 2)).toBe(true);
		expect(isEqual(2, 3)).toBe(false);
		expect(isEqual(2, "2")).toBe(false);
	});
});

// Exercise 2
describe("isLessOrEqual0", () => {
	test("isLessOrEqual0 is declared and has type function", () => {
		expect(typeof isLessOrEqual0).toEqual("function");
	});

	test("isLessOrEqual0 is an arrow function", () => {
		const isArrowFunction = isLessOrEqual0.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("isLessOrEqual0 return correct value", () => {
		expect(isLessOrEqual0(2)).toBe(false);
		expect(isLessOrEqual0(0)).toBe(true);
		expect(isLessOrEqual0(-1)).toBe(true);
	});
});

// Exercise 3
describe("timeToSeconds", () => {
	test("timeToSeconds is declared and has type function", () => {
		expect(typeof timeToSeconds).toEqual("function");
	});

	test("timeToSeconds is an arrow function", () => {
		const isArrowFunction = timeToSeconds.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("timeToSeconds should return correct amount of seconds", () => {
		expect(timeToSeconds(1, 31)).toEqual(5460);
	});

	test("timeToSeconds should return correct amount if you don't pass minutes", () => {
		expect(timeToSeconds(1)).toEqual(3600);
	});

	test("timeToSeconds should return 0", () => {
		expect(timeToSeconds()).toEqual(0);
	});
});

// Exercise 4
describe("isGameWorthTheCandle", () => {
	test("isGameWorthTheCandle is declared and has type function", () => {
		expect(typeof isGameWorthTheCandle).toEqual("function");
	});

	test("isGameWorthTheCandle is an arrow function", () => {
		const isArrowFunction = isGameWorthTheCandle.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test('isGameWorthTheCandle(0.9, 30, 5) should return true', () => {
		expect(isGameWorthTheCandle(0.9, 30, 5)).toBe(true);
	})

	test('isGameWorthTheCandle(0.2, 3, 10) should return false', () => {
		expect(isGameWorthTheCandle(0.2, 3, 10)).toBe(false);
	})
});

// Exercise 5
describe("longerString", () => {
	test("longerString is declared and has type function", () => {
		expect(typeof longerString).toEqual("function");
	});

	test("longerString is an arrow function", () => {
		const isArrowFunction = longerString.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});
	
	test("longerString should return longer string", () => {
		expect(longerString('Cat', 'Kitten')).toEqual('Kitten');
	});

	test("longerString should return equal", () => {
		expect(longerString('Cat', 'Dog')).toEqual('Equal!');
	});
});
