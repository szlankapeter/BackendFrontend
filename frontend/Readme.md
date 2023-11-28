# Űrlap létrehozása és validálása MVC

## UrlapModel
Egy általános adatleíró szerint dolgozza fel és adja vissza az egyes űrlapmezők típusát, nevét, validációhoz szükséges adatokat. 

## View
### UrlapView
Itt állítjuk össze az egész űrlapot, az elemei űrlap osztályokból. 
Az elemi űrlap osztály  egy-egy input, vagy egyéb űrlapelem típust jelent. 
Külön osztály lesz a text típusú imput elemek létrehozására, külön a number, selet, checkbox, radio, stb. 
Ezek az elemi űrlapelemeket leíró osztályok feladata a megjelenítés, valamint a validáció elvégzése is az adott elemen.
