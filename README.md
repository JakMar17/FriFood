# Spletno programiranje 2019/2020

Lastni projekt pri predmetu **Spletno programiranje** v študijskem letu **2019/2020**.


# 1. LP

Spletna aplikacija omogoča pregled nad restavracijami, ki jih uporabnik najde na seznamu vseh restavracij ter na zemljevidu. Vsaka restavracija ima vpisane lastnosti kot so odpiralni časi, menuji, komentarji uporabnikov, ocena ter cene. V kolikor restvracija ponuja obrok na študentski bon je to označeno skupaj s podatkom o doplačilu in času, ko je omogočeno koriščenje bonov.

Uporabnik se lahko registrira ali prijavi z uporabo Google ali Facebook računa. Prijevljenemu uporabniku je omogočeno vnašanje komentarje k posamezni restvraciji in ocenjevanje le teh. Uporabnik lahko dodaja in spreminja podatke o restvraciji, če podatki niso ažurni. Vsako spremembo mora potrditi administrator sistema.

Administrator sistema ima pregled na registrirani uporabniki (tem lahko spreminja pravice - možnost popravljanja informacij, dodajanja komentarjev, ocen, administratorske pravice). Administrator ima pregled nad vsemi komentarji in ocenami, ki jih lahko ureja in briše. Vsako spremembo, ki jo uporabnik vnese k restavraciji, mora potrditi administrator.

## Prijava in registracija uporabnika
### [Login.html](FRIFOOD/app_server/views/Login-Register/Login.html)
Stran za prijavit v sistem z možnostjo registracije
### [Register.html](FRIFOOD/app_server/views/Login-Register/Register.html)
Stran za registrirati v sistem, z potrditvijo registracije preko emaila in možnostjo obvescanja po emailu
    
## [RestaurantView.html](FRIFOOD/app_server/views/Restaurant-View-Page/RestaurantView.html)
V tem pogledu se bo videl podrobnejši opis restavracije ter slike restavracije in komentarji, ki jih lahko pišejo uporabniki o restavracijah. Iz te strani se 
bo mozno prestaviti z navigacijo na dodajanje restavracije, zemljevid, link restavracije in nazaj na prvo stran

## [CommentPage.html](FRIFOOD/app_server/views/Comment-Page/CommentPage.html)
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

## Navigacijska vrstica [Navbar.html](docs/Navbar/Navbar.html)
Datoteka ima implementirano navigacijsko vrstico, ki bo uporabljena čez celotno stran. 
Na njej ima gumb za pregled podstrani, gumb za iskanje in gumb za pregled profila.

## Uporabniški profil

V sistemu obstajata dve vrsti uporabnikov: običajen uporabnik in administrator. Administrator ima dostop do vseh strani do katerih ima dostop navaden uporabnik kakor tudi do *Admin Dashboarda* od koder lahko ureja vsebino spletne aplikacije.

### Pregled uporabniškega profila [UserInfoPage.html](docs/profile/userProfile/UserInfoPage.html)
Stran do katerega lahko vsak prijavljen uporabnik dostopa prek navigacijske vrstice. Stran je razdeljena na levi pregledni pogled, kjer ima uporabnik pregled do, ob registraciji, vnešenih podatkov, kakor tudi dostop do lastne statistike aktivnosti na strani.

V desnem pregledu uporabnik najde svoje zadnje aktivnosti na strani, kjer barva določene aktivnosti določa:
* *zelena* - aktivnost (razen ocena) je objavljena,
* *bela* - ocena je obajvljena,
* *rumena* - aktivnost je v obdelavi (administrator mora določene aktivnosti potrditi)
* *rdeča* - aktivnosti ni objavljena, administrator jo je zavrnil

Ob kliku na katero izmed aktivnosti (razen oceno) se uporabniku prikaže okno (*bootstrap modal*) v katerem dostopa do podrobnosti posamezne aktivnosti.

#### Podrobnosti elementa: komentar [modal-editComment.html](docs/profile/userProfile/modals/modal-editComment.html)

Uporabnik lahko v prikazanem oknu (*bootstrap modal*) spreminja objavljen komentar ali ga popolnoma izbriše.

#### Podrobnosti elementa: popravek [modal-detailCorrectionView.html](docs/profile/userProfile/modals/modal-detailCorrectionView.html)

Uporabnik lahko v prikazanem oknu (*bootstrap modal*) dostopa do podrobnosti popravka, katerega je predlagal administratorski ekipi. Uporabnik popravka ne more spreminjati.

### Spreminjanje podatkov uporabnika [UserSetting.html](docs/profile/userProfile/UserSetting.html)

Uporabnik lahko s klikom na ikono koleščka nad sliko uporabnika v [UserInfoPage.html](docs/profile/userProfile/UserInfoPage.html) dostopa do nastavitev svojega profila. Tu lahko spreminja svoje podatke. Pri spreminjanju gesla in/ali epošte uporabnika sistem dodatno obvesti preko vnešene epošte.

## Administratorska nadzorna plošča [Admin_InfoPage.html](docs/profile/adminDashboard/Admin_InfoPage.html)

Uporabnik, ki ima status administratorja, lahko preko svojega uporabniškega profila [UserInfoPage.html](docs/profile/userProfile/UserInfoPage.html) dostopa do administratorskega pogleda. To stori s klikom na *Administratorski pogled*.

V pregledu sistema lahko dostopa do komponent nadzorne plošče, ki so opisane v nadaljevanju. V glavne delu zaslonske makse lahko preko hitrih dostopov pregleduje odprte zahtevke ter do njih dostopa.

Pod *Zadnje aktivnosti* lahko pregleduje, išče in  dostopa do zadnjih aktivnosti, ki so bile umeščene na spletno stran. Barva aktivnosti predstavlja stanje le-teh. Klik na katero izmed aktivnosti odpre [modal-detailCommentsView.html](docs/profile/adminDashboard/modals/modal-detailCommentsView.html) *bootstrap modal* okno preko katerega lahko administrator ureja in pregleduje posamezne aktivnosti.

### Čakalna vrsta [Admin_WaitingList.html](docs/profile/adminDashboard/Admin_WaitingList.html)

V čakalni vrsti ima administrator dostop do odprtih zahtevkov. Zahtevke delimo med popravke delovnega časa, cenika, lokacije ali zahtevek po odprtju nove lokacije (restavracije). Vsak zahtevek mora predhodno administrator potrditi (ali zavreči).

Administrator s klikom na gumb za urejanje (ki se nahaja ob vsakem posameznem zahtevku) dostopa do podrobnosti zahtevka [modal-waitingListElement.html](docs/profile/adminDashboard/modals/modal-waitingListElement.html). Ob zahtevek lahko zapiše svojo opombo in ga potrdi ali ovrže.

### Komentarji [Admin_CommentsView.html](docs/profile/adminDashboard/Admin_CommentsView.html)

V pregledu komentarjev lahko administrator dostopa do vseh objavljenih in arhiviranih komentarjev. Za objavo komentarjev uporabnik ne potrebuje potrditve administratorja, vendar lahko administrator komentar uredi ali izbriše v kolikor smatra, da komentar krši pravila spletnega mesta.

Administrator s klikom na gumb za urejanje (ki se nahaja ob vsakem posameznem komentarju) dostopa do podrobnosti komentarja [modal-detailCommentsView.html](docs/profile/adminDashboard/modals/modal-detailCommentsView.html). Komentar lahko ureja ali izbriše.

### Ocene [Admin_RatingsView.html](docs/profile/adminDashboard/Admin_RatingsView.html)

V pregledu ocen lahko administrator dostopa do vseh objavljenih ocen. Za objavo ocene uporabnik ne potrebuje potrditve s strani administratorja, vendar lahko oceno administrator izbriše v kolikor predvideva, da ocena krši pravila spletnega mesta.

### Lokacije [Admin_LocationsView.html](docs/profile/adminDashboard/Admin_LocationsView.html)

V pregledu lokacij lahko administrator pregleduje vse objavljene in arhivirane lokacije. Do podrobnosti posamezne lokacije dostopa s klikom na gumb za urejanje.

Lokacijo lahko ureja prek pogleda [modal-detailLocationView.html](docs/profile/adminDashboard/modals/modal-detailLocationView.html).

### Uporabniki [Admin_UsersView.html](docs/profile/adminDashboard/Admin_UsersView.html)

V pregledu uporabnikov lahko administrator pregleduje vse aktivne in neaktivne uporabnike. Do podrobnosti uporabnika dostopa s klikom na gumb za urejanje.

Uporabniku lahko ureja določene atribute preko pogleda [modal-detailUserView.html](docs/profile/adminDashboard/modals/modal-detailUserView.html). V tem oknu lahko dostopa tudi do uporabnikove statistike in mu določa vrsto računa (navaden uporabnik, administrator).

## Razlike brskalnikov
Primerjali smo brskalnike: Google Chrome, Firefox, Edge.

* Razlikujejo se odebeljenosti naslovnih textov
* Razlikujejo se upload-file html prikazi, med vsemi tremi so razlike: (Choose file - Chrome, Browse... - Edge in Firefox)
    * Google Chrome - Gumb ima napis "Choose File"
    * Firefox - Gumb ima napis "Browse..." in sledi isto kot Google Chrome
    * Edge - Gumb ima napis isti kot Firefox ampak ima polje za vnos pred gumbom
* Razlikujejo se input-form html prikazi, med vsemi tremi so razlike
    * Google Chrome - Polje za pisanje številk pokaže puščice za večanje in manjšanje šele po tem, ko gremo skozi z miško
    * Firefox - Polje za pisanje številk ima puščice vidne vedno
    * Edge - Nima puščic ampak ima namesto njih opcijo "križec" za brisanje celotnega polja
* Razlikuje se stil drsne vrstice (scroll bar)
    * Google Chrome - lahko smo naredili svoj stil drsne vrstice v css z "-webkit-scrollbar "
    * Edge & Firefox - ne podpirata te funkcije in je drsna vrstica enaka povsod

## Uporaba zunjanega API vmesnika (Google maps - places)
Uporabili bomo Google Places API, ki nam bo za izbrano ali trenutno lokacijo poiskal restavracije v nekem radiusu.
Dobili bomo lokacijo in naslovno sliko, brez cen in ocene, razen če je restavracija že v naši databazi.

Dokončali smo LP1 dne 3.11. 2019 - 21:00

# 2. LP

### [Login.html](FRIFOOD/app_server/views/Login-Register/Login.html)
Dovoljen vnos male, velike crke, stevilke, in znak @
### [Register.html](FRIFOOD/app_server/views/Login-Register/Register.html)
Vnos pri imenu in primku ne sme biti prazen, gesla se morata ujemati, in email mora vsebovat @


# 3. LP

Dinamična spletna aplikacija s podatkovno bazo


# 4. LP

SPA aplikacija na eni strani


# 5. LP
