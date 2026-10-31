
function toRoman(number) {
    if (!Number.isInteger(number) || number < 1 || number > 3999) {
        throw new Error("A számnak 1 és 3999 közötti egész számnak kell lennie.");
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (number >= values[i]) {
            result += symbols[i];
            number -= values[i];
        }
    }

    return result;
}
