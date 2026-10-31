
function toRoman(number) {
    const values = [
        900, 400, 90, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "CM", "CD", "XC", "XL",
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
