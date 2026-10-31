
QUnit.module("Arab szám - római szám konverter", function () {

    QUnit.test("Az 1 átalakítása római számmá", function (assert) {
        assert.strictEqual(toRoman(1), "I", "Az 1 római számmal I");
    });

    QUnit.test("Egyszerű számok átalakítása", function (assert) {
        assert.strictEqual(toRoman(2), "II", "A 2 római számmal II");
        assert.strictEqual(toRoman(3), "III", "A 3 római számmal III");
        assert.strictEqual(toRoman(5), "V", "Az 5 római számmal V");
    });

    QUnit.test("Speciális római számok", function (assert) {
        assert.strictEqual(toRoman(4), "IV", "A 4 római számmal IV");
        assert.strictEqual(toRoman(9), "IX", "A 9 római számmal IX");
        assert.strictEqual(toRoman(10), "X", "A 10 római számmal X");
        assert.strictEqual(toRoman(40), "XL", "A 40 római számmal XL");
        assert.strictEqual(toRoman(90), "XC", "A 90 római számmal XC");
        assert.strictEqual(toRoman(400), "CD", "A 400 római számmal CD");
        assert.strictEqual(toRoman(900), "CM", "A 900 római számmal CM");
    });

});
