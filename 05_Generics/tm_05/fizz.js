/**
 *  @param {number} value
 * @returns {string|number}
 */
 
function zzzzOrNum(value) {
    if (typeof value !== "number") {
        throw new Error("Input harus berupa bilangan bulat");
    }
    if (value % 15 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 */

function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa larik (array)");
    }
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};