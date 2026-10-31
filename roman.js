
function toRoman(number) {
    const values = [5, 1];
    const symbols = ["V", "I"];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (number >= values[i]) {
            result += symbols[i];
            number -= values[i];
        }
    }

    return result;
}
