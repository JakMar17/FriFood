# Spletno programiranje 2019/2020

Lastni projekt pri predmetu **Spletno programiranje** v študijskem letu **2019/2020**.


## 1. LP

Spletna aplikacija omogoča pregled nad restavracijami, ki jih uporabnik najde na seznamu vseh restavracij ter na zemljevidu. Vsaka restavracija ima vpisane lastnosti kot so odpiralni časi, menuji, komentarji uporabnikov, ocena ter cene. V kolikor restvracija ponuja obrok na študentski bon je to označeno skupaj s podatkom o doplačilu in času, ko je omogočeno koriščenje bonov.

Uporabnik se lahko registrira ali prijavi z uporabo Google ali Facebook računa. Prijevljenemu uporabniku je omogočeno vnašanje komentarje k posamezni restvraciji in ocenjevanje le teh. Uporabnik lahko dodaja in spreminja podatke o restvraciji, če podatki niso ažurni. Vsako spremembo mora potrditi administrator sistema.

Administrator sistema ima pregled na registrirani uporabniki (tem lahko spreminja pravice - možnost popravljanja informacij, dodajanja komentarjev, ocen, administratorske pravice). Administrator ima pregled nad vsemi komentarji in ocenami, ki jih lahko ureja in briše. Vsako spremembo, ki jo uporabnik vnese k restavraciji, mora potrditi administrator.

## Prijava in registracija uporabnika
### [Login.html](docs/Login-Register/Login.html)
Stran za prijavit v sistem z možnostjo registracije
### [Register.html](docs/Login-Register/Register.html)
Stran za registrirati v sistem, z potrditvijo registracije preko emaila in možnostjo obvescanja po emailu
    
## [RestaurantView.html](docs/Restaurant-View-Page/RestaurantView.html)
V tem pogledu se bo videl podrobnejši opis restavracije ter slike restavracije in komentarji, ki jih lahko pišejo uporabniki o restavracijah. Iz te strani se 
bo mozno prestaviti z navigacijo na dodajanje restavracije, zemljevid, link restavracije in nazaj na prvo stran

## [CommentPage.html](docs/Comment-Page/CommentPage.html)
Stran na kateri lahko dodajamo komentarje o posamezni restavraciji, jih brišemo in urejamo

## Dodaj restavracijo [restaurant-add.html](docs/restaurant-add/restaurant-add.html)
Stran na kateri je implementirana forma za dodajanje restavracije v naš seznam restavracij.
Oddati je potrebno ime, naslov, opis restavracije in prav tako čas obratovanja.
Seveda ne smemo pozabiti na ceno doplačila za študentski meni (če restavracija podpira to možnost),
ter tudi povprečna malica. Priložili smo tudi možnost oddaje ikone restavracije in naslovne slike.  
Na koncu mora oseba, ki oddaja formo sprejeti pogoje uporabe, ter klikniti gumb za oddajo.
Kasneje mora administrator to oddajo pregledati in jo potrditi.

## Seznam restavracij [restaurant-list.html](docs/restaurant-list/restaurant-list.html)
Stran na kateri je implementiran seznam vseh restavracij oziroma restavracije,
ki so bile poiskane po ključnih besedah iz navigacijskega menija.
Na vsako stran oz. vnos v tem seznamu se da klikniti na kar se odzove zemljevid na desni strani in
pokaže kje se ta restavracija nahaja. Zemljevid prav tako omogoča predstaviti optimalno pot od trenutne lokacije, če
to uporabnik omogoči.  
Vsak vnos seznama ima ime, naslov in oceno restavracije, ter ceno malice in doplačilo na bone če to restavracija omogoča.
Na koncu imamo pa še dve povezavi in sicer na _RestaurantView.html_ (Več o restavraciji), ter na _CommentPage.html_ (Oceni ali komentiraj).

## Glavna stran [front-page.html](docs/Front-page/front-page.html)
Stran ima implementiran pogled takoj po prijavi, kjer se userja lepo pozdravi na stran in mu da glavni action button
za pregled restavracij.

## Navigacijska vrstica [Navbar.html](docs/Navbar/navbar.html)
Datoteka ima implementirano navigacijsko vrstico, ki bo uporabljena čez celotno stran. 
Na njej ima gumb za pregled podstrani, gumb za iskanje in gumb za pregled profila.

## 2. LP

Dinamična spletna aplikacija z logiko na strani strežnika


## 3. LP

Dinamična spletna aplikacija s podatkovno bazo


## 4. LP

SPA aplikacija na eni strani


## 5. LP

=======
# Spletno programiranje 2019/2020

Lastni projekt pri predmetu **Spletno programiranje** v študijskem letu **2019/2020**.


## 1. LP

Spletna aplikacija omogoča pregled nad restavracijami, ki jih uporabnik najde na seznamu vseh restavracij ter na zemljevidu. Vsaka restavracija ima vpisane lastnosti kot so odpiralni časi, menuji, komentarji uporabnikov, ocena ter cene. V kolikor restvracija ponuja obrok na študentski bon je to označeno skupaj s podatkom o doplačilu in času, ko je omogočeno koriščenje bonov.

Uporabnik se lahko registrira ali prijavi z uporabo Google ali Facebook računa. Prijevljenemu uporabniku je omogočeno vnašanje komentarje k posamezni restvraciji in ocenjevanje le teh. Uporabnik lahko dodaja in spreminja podatke o restvraciji, če podatki niso ažurni. Vsako spremembo mora potrditi administrator sistema.

Administrator sistema ima pregled na registrirani uporabniki (tem lahko spreminja pravice - možnost popravljanja informacij, dodajanja komentarjev, ocen, administratorske pravice). Administrator ima pregled nad vsemi komentarji in ocenami, ki jih lahko ureja in briše. Vsako spremembo, ki jo uporabnik vnese k restavraciji, mora potrditi administrator.


## 2. LP

Dinamična spletna aplikacija z logiko na strani strežnika


## 3. LP

Dinamična spletna aplikacija s podatkovno bazo


## 4. LP

SPA aplikacija na eni strani


## 5. LP
