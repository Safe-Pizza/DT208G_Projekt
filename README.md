# Projektuppgift, DT208G Programmering I TypeScript
Detta är en projektuppgift i _Webbutveckingsprogrammet_ på Mittuniveristetet.

## Länk till webbplats
[Min webbplats](https://dt208g-projekt-hali.netlify.app/)

## Syfte
Projektet har som syfte att omsätta kunskaper från kursen olika moment i ett större sammanhängade projekt men TypeScript och Angular som ramverk.

## Uppgift
Skapa en webbplats för ett fiktivt universitet där tillgängliga kurser ska listas samt möjlighet att skapa ett ramschema av en uppsättning valda kurser från listan.
Angular som användas som ramverk och TypeScript som programmeringsspråk. Källkoden ska versionshanteras med Git och webbplatsen ska publiceras på valfri webbhost.

### Grundkrav
* Webbplats skapas med Anuglar och TypeScript,
* Minst två undersidor, en för att visa kurser och en för skapat ramschema,
* Komponenter och Routing ska användas,
* Ramschema ska gå att skapa (inga dubletter),
* Ramschema ska lagras mha. localStorage,
* Webbplatsen ska ha ett välarbetat helhetsintryck med resonsiv design,
* Källkod versionshanteras med Git,
* Färdig lösning ska publiceras till publik webbhost.

#### Krav kurslista
Kurserna ska presenteras på ett tydligt sätt och det ska gå att sortera kurserna på kurskod, kursnamn, poäng och ämne. Filtera kurser på kurskod och kursnamn. Välja kurser utifrån ämne. Lägga till kurser i ramschema. Se antal kurser i aktuell sökning.

#### Krav ramschema
Ramschemat ska presenteras på ett tydligt sätt och det ska gå att se valda kurser som lagras i localStorage. Se sammanlagda poäng för valda kurser. Kunna ta bort kurser från ramschemat.

## Lösning
Här kan du läsa om hur uppgiften lösts, vilket innehåll och funktioner som finns på respektive sida samt hur repot kan klonas ned och köras lokalt på din egen dator.

### Startsida (home)
* **Presentation:** En presentation av Universitetet,
* **Ämnen:** Alla olika ämnen presenteras.

### Kurser (courses)
* **Lista:** Lista med alla kurser från JSON-data,
* **Sök:** Sökning/filter med fritext på kurskod och kursnamn,
* **Filtering:** Filter för ämne från lista,
* **Sortering:** Sortering vid klick på rubrik (kurskod, kursnamn, poäng, ämne),
* **Lägg till:** Knapp för lägg till kurs i ramschema (inga dubletter kan lagras),
* **Visa ramschema:** Knapp för att visa ramschemat i komponent på sidan (min skärmstrl 1000px),

### Ramschema (courseschema)
* **Lista:** Lista med kurser som är tillagda i ramschemat,
* **Ta bort:** Knapp för att ta bort kurser från ramschemat,
* **Total poäng:** Visar sammanlagd poäng för kurser tillagda i ramschemat,
* **localStorage:** LocalStorage används för lagring av ramschema,

### Extra funktioner
Nedan listas extra funktioner för uppgiften:

* Fler undersidor: Startsida med information om det fiktiva universitetet samt listning av ämnen som erbjuds,
* Ramschema i komponent: Möjlighet att se ramschemat från kurslistningen (endas vid skärmstorlek över 1000px)

### Installation
1. Klona repot
    ```sh
    git clone https://github.com/safe-pizza/DT208G_Projekt.git
    ```

2. Gå in i projektmappen
    ```sh
    cd DT208G_Projekt
    ```

3. Installera
    ```sh
    npm install
    ```

4. Starta en utvecklingsserver
    ```sh
    ng serve
    ```

Nu finns projektet tillgängligt för dig att köra lokalt på din dator via localhost.

## Kontakt
 Vill du komma i kontakt med mig?


**Hanna Lindkvist** \
✉️ [hali2507@student.miun.se](mailto:hali2507@student.miun.se)
