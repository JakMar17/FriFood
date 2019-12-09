# Spletno programiranje 2019/2020

Lastni projekt pri predmetu **Spletno programiranje** v študijskem letu **2019/2020**.


# 1. LP

Spletna aplikacija omogoča pregled nad restavracijami, ki jih uporabnik najde na seznamu vseh restavracij ter na zemljevidu. Vsaka restavracija ima vpisane lastnosti kot so odpiralni časi, menuji, komentarji uporabnikov, ocena ter cene. V kolikor restavracija ponuja obrok na študentski bon je to označeno skupaj s podatkom o doplačilu.

Uporabnik se lahko registrira ali prijavi. Prijavljenemu uporabniku je omogočeno vnašanje komentarjev k posamezni restvraciji in ocenjevanje le teh.

Administrator sistema ima pregled nad registrirani uporabniki. Administrator ima pregled nad vsemi komentarji in ocenami, ki jih lahko ureja in briše.

## Prijava in registracija uporabnika
### [Login.html](FRIFOOD/app_server/views/Login-Register/Login.html)
Stran za prijavit v sistem z možnostjo registracije
### [Register.html](FRIFOOD/app_server/views/Login-Register/Register.html)
Stran za registrirati v sistem, z potrditvijo registracije preko emaila in možnostjo obveščanja po emailu.
    
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
pokaže kje se ta restavracija nahaja.

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

V desnem pregledu uporabnik najde svoje zadnje aktivnosti na strani.

Ob kliku na katero izmed aktivnosti se uporabniku prikaže okno (*bootstrap modal*) v katerem dostopa do podrobnosti posamezne aktivnosti.

#### Podrobnosti elementa: komentar [modal-editComment.html](docs/profile/userProfile/modals/modal-editComment.html)

Uporabnik lahko v prikazanem oknu (*bootstrap modal*) spreminja objavljen komentar ali ga popolnoma izbriše.


## Administratorska nadzorna plošča

Uporabnik, ki ima status administratorja, lahko preko svojega uporabniškega profila [UserInfoPage.html](docs/profile/userProfile/UserInfoPage.html) dostopa do administratorskega pogleda. To stori s klikom na *Administratorski pogled*.

V pregledu sistema lahko dostopa do komponent nadzorne plošče, ki so opisane v nadaljevanju. V glavne delu zaslonske makse lahko preko hitrih dostopov pregleduje odprte zahtevke ter do njih dostopa.

### Komentarji [Admin_CommentsView.html](docs/profile/adminDashboard/Admin_CommentsView.html)

V pregledu komentarjev lahko administrator dostopa do vseh objavljenih komentarjev. Za objavo komentarjev uporabnik ne potrebuje potrditve administratorja, vendar lahko administrator komentar uredi ali izbriše v kolikor smatra, da komentar krši pravila spletnega mesta.

Administrator s klikom na gumb za urejanje (ki se nahaja ob vsakem posameznem komentarju) dostopa do podrobnosti komentarja [modal-detailCommentsView.html](docs/profile/adminDashboard/modals/modal-detailCommentsView.html). Komentar lahko ureja ali izbriše.

### Lokacije [Admin_LocationsView.html](docs/profile/adminDashboard/Admin_LocationsView.html)

V pregledu lokacij lahko administrator pregleduje vse objavljene in arhivirane lokacije. Do podrobnosti posamezne lokacije dostopa s klikom na gumb. Lokacijo lahko tudi izbriše.

### Uporabniki [Admin_UsersView.html](docs/profile/adminDashboard/Admin_UsersView.html)

V pregledu uporabnikov lahko administrator pregleduje vse aktivne uporabnike. Do podrobnosti uporabnika dostopa s klikom na gumb za urejanje.

Uporabniku lahko ureja določene atribute preko pogleda [modal-detailUserView.html](docs/profile/adminDashboard/modals/modal-detailUserView.html).   

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

Dokončali smo LP1 dne 3.11. 2019 - 21:00

## Uporaba zunjanega API vmesnika (Google maps - places) - dodatek k LP1
Uporabili bomo Google Places API, ki nam bo za izbrano lokacijo poiskal restavracije v nekem radiusu.
Dobili bomo lokacijo, ime, naslovno sliko, ikono za restavracijo in oceno, brez cen ali prisotnosti bonov.  
Zaradi izrecnega navodila 'google terms of service' - "delete, obscure, or in any manner alter any brand features, logos, 
__warnings__, notices... or links that appear in the Service or the Content", smo warning za deprecated feature __*open_now*__ 
pustili v konzoli.

# 2. LP

## Veljavni uporabniški vnosi

### [Login.html](FRIFOOD/app_server/views/Login-Register/Login.html)

Vnosno polje kot vnos sprejema epoštni naslov. Dovoljene so male in velike črke, šteilke in znaki *. , _ -*. Vnosno polje ne sme biti prazno, obvezen je znak *@*.

Vnosno polje *geslo* sprejema geslo, ki ne sme biti prazno. Dovoljene so velike in male črke, številke ter znaki.

### [Register.html](FRIFOOD/app_server/views/Login-Register/Register.html)

Vsa vnosna polja morajo biti izpolnjene.

Vnosno polje *ime* ne sme biti prazno sprejema velike in male črke.

Vnosno polje *priimek* ne sme biti prazno sprejema velike in male črke.

Vnosno polje *email naslov* ne sme biti prazno, sprejema velike in male črke, številke in znake . , _ -. Vnosno polje mora imet en znak @.

Vnosni polji *geslo* in *ponovi geslo* sprejemata velike in male črke, številke ter posebne znake.

### Dodajanje in urejanje komentarja na `commentPage`

Ocenjevanje restvracije z zvezdico je obvezno.

Polje za vnos komentarja ne sme biti prazno. Dovoljene so velike in male črke, številke ter znaki.

### Urejanje komentarjev v uporabniškem profilu `/profile`

Polje za urejanje komentarja ne sme biti prazno. Dovoljene so velike in male črke, številke in znaki.

### Urejanje komentarjev v Admin Dashboard `/admin-comments`

Polje za urejanje komentarja ne sme biti prazno. Dovoljene so velike in male črke, številke in znaki.

### Urejanje uporabniških računov v Admin Dashboard `/admin-users`

Vsa polja morajo biti izpolnjena. Polja ime in priimek sprejemata velike in male črke.

Polje email sprejema epoštni račun. Dovoljene so male in velike črke, številke ter znaki . , - _. Obvezen znak je @.

### Dodajanje restavracije `/restaurant-add`

|Ime polja|Obvezno?|Dovoljeni vnosi|
|--|--|--|
|Ime restavracije|Da|Male in velike črke, številke, znaki|
|Lokacija restavracije|Da|Male in velike črke, številke, znaki|
|Kratek opis restavracije|Da|Male in velike črke, številke, znaki|
|Študentsko doplačilo|Ne|Številke|
|Cena malice|Ne|Številke|
|Urnik (ura od do)|Ne|Številke v razponu 0-24|

## Podprte naprave

Aplikacija deluje na vseh **računalnikih** s sistemom Windows, Linux ali macOS, ki podpirajo zadnje aktualne verzije spletnih brskalnikov Chrome (verzija 78 in več), Microsoft Edge (verzija 44 in več) ali Firefox (verzija 71 in več).

Aplikacija deluje na vseh **mobilnih napravah** s sistemom **AndroidOS**, ki podpirajo aktualne verzije spletnih brskalnikov Chrome (verzija 76 in več).

Aplikacije delujejo na **mobilnih napravah** s sistemom **iOS**, ki podpirajo aktualne verzije spletnih brskalnikov Chrome (verzija 76 in več).

# 3. LP: [Heroku spletna aplikacija](https://frifood-2019.herokuapp.com/)

## Namestitev aplikacije v lokalnem okolju
> Navodila v nadaljevanju predvidevajo, da je v lokalnem okolju mogoče izvajati ukaze `npm` in poganjanje podatkovne baze mongoDB.

### Namestitev potrebnih datotek za zagon aplikacije

1. Z ukazom `git clone https://github.com/sp-2019-2020/LP-14.git` v trenutno mapo namestimo datoteke iz oddaljenega repozitorija.
2. Premaknemo se v mapo `.\LP-14\FRIFOOD`
3.  Izvedemo ukaz `npm install` s čemer namestimo potrebne vmesnike za zagon aplikacije.

### Poganjanje aplikacije
4.  V mapi `.\LP-14\FRIFOOD\` izvedemo ukaz `node app.js`. V konzoli dobimo podatek o povezavi na podatkovno bazo.

### Dostop do aplikacije
5. Spletna aplikacija je dostopna na vratih 3000, privzeti naslov za dostop je [localhost:3000](localhost:3000).

# 4. LP

SPA aplikacija na eni strani


# 5. LP
