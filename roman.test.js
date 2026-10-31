
QUnit.module("Arab szám - római szám konverter", function () {

    QUnit.test("Az 1 átalakítása római számmá", function (assert) {
        assert.strictEqual(toRoman(1), "I", "Az 1 római számmal I");
    });

    QUnit.test("Egyszerű számok átalakítása", function (assert) {
        assert.strictEqual(toRoman(2), "II");
        assert.strictEqual(toRoman(3), "III");
        assert.strictEqual(toRoman(5), "V");
    });

    QUnit.test("Speciális római számok", function (assert) {
        assert.strictEqual(toRoman(4), "IV");
        assert.strictEqual(toRoman(9), "IX");
        assert.strictEqual(toRoman(10), "X");
        assert.strictEqual(toRoman(40), "XL");
        assert.strictEqual(toRoman(90), "XC");
        assert.strictEqual(toRoman(400), "CD");
        assert.strictEqual(toRoman(900), "CM");
    });

    QUnit.test("Összetett római számok", function (assert) {
        assert.strictEqual(toRoman(14), "XIV");
        assert.strictEqual(toRoman(58), "LVIII");
        assert.strictEqual(toRoman(444), "CDXLIV");
        assert.strictEqual(toRoman(1994), "MCMXCIV");
    });

    QUnit.test("Határértékek", function (assert) {
        assert.strictEqual(toRoman(1), "I");
        assert.strictEqual(toRoman(3999), "MMMCMXCIX");
    });

    QUnit.test("Érvénytelen bemenetek", function (assert) {
        assert.throws(function () {
            toRoman(0);
        }, "A 0 érvénytelen");

        assert.throws(function () {
            toRoman(-1);
        }, "A negatív szám érvénytelen");

        assert.throws(function () {
            toRoman(4000);
        }, "A 4000 kívül esik a tartományon");

        assert.throws(function () {
            toRoman(3.5);
        }, "A tört szám érvénytelen");

        assert.throws(function () {
            toRoman("10");
        }, "A szöveges bemenet érvénytelen");

        assert.throws(function () {
            toRoman(null);
        }, "A null érték érvénytelen");

        assert.throws(function () {
            toRoman(NaN);
        }, "A NaN érték érvénytelen");
    });

});
