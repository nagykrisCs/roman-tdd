
ARAB SZÁM - RÓMAI SZÁM KONVERTER (TDD)

Projekt leírása:

A projekt célja egy JavaScript alapú program fejlesztése,
amely az arab számokat római számokká alakítja át.

A program az 1 és 3999 közötti egész számokat kezeli,
a hagyományos római számírás szabályai szerint.


Használt technológiák:

- JavaScript
- QUnit tesztkeretrendszer
- Git verziókezelés
- GitHub


Fejlesztési módszertan:

A projekt a Test Driven Development (TDD)
módszertanát követi.

A fejlesztés három lépésből áll:

1. RED - Sikertelen teszt készítése.
2. GREEN - A teszt teljesítéséhez szükséges kód megírása.
3. REFACTOR - A kód szerkezetének javítása.

A fejlesztés során a tesztek és a programkód
külön commitokban kerültek módosításra.


Megvalósított funkciók:

- Arab számok átalakítása római számokká
- Az 1 és 3999 közötti egész számok kezelése
- Speciális római számok kezelése (IV, IX, XL, XC, CD, CM)
- Összetett római számok átalakítása
- Érvénytelen bemenetek ellenőrzése
- Automatikus tesztelés QUnit segítségével


Példák:

1 -> I
4 -> IV
9 -> IX
14 -> XIV
58 -> LVIII
1994 -> MCMXCIV
3999 -> MMMCMXCIX


Projekt felépítése:

A projekt fájljai:

- index.html - A QUnit tesztoldala
- roman.js - A konverter forráskódja
- roman.test.js - Automatikus QUnit tesztek
- README.md - Projekt dokumentáció


Futtatás és tesztelés:

1. Töltsük le a GitHub repository tartalmát.
2. Helyezzük a fájlokat ugyanabba a mappába.
3. Nyissuk meg az index.html fájlt egy böngészőben.
4. A QUnit automatikusan lefuttatja a teszteket.
5. A tesztek eredményei megjelennek a böngészőben.

A QUnit keretrendszer internetkapcsolatot igényel,
mivel CDN-en keresztül töltődik be.


Hibakezelés:

A program ellenőrzi a bemeneti értékeket.

Érvénytelen bemenetnek számít:

- A 0 érték
- Negatív szám
- 3999-nél nagyobb szám
- Nem egész szám
- Szöveges bemenet
- null érték
- NaN érték

Érvénytelen bemenet esetén a program
Error kivételt dob.


QUnit tesztek:

A tesztek az alábbi eseteket fedik le:

1. Az 1 átalakítása római számmá
2. Egyszerű számok átalakítása
3. Speciális római számok
4. Összetett római számok
5. Határértékek
6. Érvénytelen bemenetek

A projekt összesen 6 QUnit tesztet
és 24 ellenőrzést tartalmaz.

Az elvárt eredmény:
6 sikeres teszt, 24 sikeres ellenőrzés, 0 hiba.


Git verziókezelés és TDD folyamat:

1.0 - Initial project setup
1.1 - RED: First failing test
1.2 - GREEN: Implement conversion of 1
1.3 - RED: Add tests for 2, 3 and 5
1.4 - GREEN: Implement conversion of 2, 3 and 5
1.5 - REFACTOR: Simplify conversion using loops
1.6 - RED: Add tests for special Roman numerals
1.7 - GREEN: Implement special Roman numerals
1.8 - RED: Add tests for complex numbers and boundaries
1.9 - GREEN: Implement complex Roman numerals
2.0 - RED: Add invalid input tests
2.1 - GREEN: Implement input validation
2.2 - REFACTOR: Improve code structure
2.3 - FINAL: Update project documentation


Összegzés:

A projekt megvalósítja az arab számok római számokká
alakítását 1 és 3999 között.

A program kezeli a speciális római számokat,
az összetett számokat és az érvénytelen bemeneteket.

A QUnit tesztek ellenőrzik a program működését,
a Git commitok pedig bemutatják a
tesztvezérelt fejlesztés folyamatát.
