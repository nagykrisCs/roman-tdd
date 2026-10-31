
QUnit.module("Arab szám - római szám konverter", function () {

    QUnit.test("Az 1 átalakítása római számmá", function (assert) {
        assert.strictEqual(toRoman(1), "I", "Az 1 római számmal I");
    });

});
