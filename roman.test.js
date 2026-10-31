
QUnit.module("Arab szám - római szám konverter", function () {

    QUnit.test("Az 1 átalakítása római számmá", function (assert) {
        assert.strictEqual(toRoman(1), "I", "Az 1 római számmal I");
    });

    QUnit.test("Egyszerű számok átalakítása", function (assert) {
        assert.strictEqual(toRoman(2), "II", "A 2 római számmal II");
        assert.strictEqual(toRoman(3), "III", "A 3 római számmal III");
        assert.strictEqual(toRoman(5), "V", "Az 5 római számmal V");
    });

});
