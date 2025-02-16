# JavaScript Aufgabe: Inventar-System

## Beschreibung
Du sollst ein kleines Inventar-System für einen Abenteurer programmieren.

## Anforderungen

1. Erstelle ein Array `inventar`, das die folgenden Gegenstände enthält:
   ```javascript
   ["Schwert", "Schild", "Heiltrank"]
   ```
2. Erstelle ein Objekt `spieler` mit folgenden Eigenschaften:
   ```javascript
   {
     name: "Held",
     leben: 100,
     gold: 50,
     rucksack: []
   }
   ```
3. Schreibe eine Funktion `kaufeItem(item)`, die prüft:
   - Falls das `item` im `inventar` existiert **und** der Spieler genug Gold hat (10 Gold pro Item), wird das Item in `spieler.rucksack` hinzugefügt und `spieler.gold` um 10 reduziert.
   - Falls nicht, soll eine entsprechende Nachricht ausgegeben werden.
4. Verwende eine `for`-Schleife, um alle Items im Rucksack auszugeben.
5. Ergänze eine `while`-Schleife, die den Spieler so lange Heiltränke trinken lässt, bis sein Leben wieder voll ist oder keine mehr im Rucksack sind. Jeder Heiltrank heilt 20 Leben.

## Bonus (optional)
- Füge eine Funktion hinzu, um ein Item aus dem Rucksack zu entfernen.
- Mache die Items statt als `Array` als `Object`, und gib ihnen einen unterschiedlichen Preis.

Viel Erfolg! :)

