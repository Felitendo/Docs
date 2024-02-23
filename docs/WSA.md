---
sidebar_label: 'Anleitung: Android Apps auf deinem Computer installieren'
sidebar_position: 3
---
import ReactPlayer from 'react-player'


In diesem Tutorial erfährst du, wie du das Windows Subsystem für Android (WSA) auf deinem Computer einrichtest, um Android-Apps auf deinem Computer zu installieren.

:::danger Achtung

Diese Anleitung funktioniert nur, wenn dein Computer das Betriebssystem **Windows 11** oder eine höhere Version verwendet.

:::

# Schritt 1: VM-Platform aktivieren

1. Öffne die "Systemsteuerung" auf deinem Windows 11 Computer. Dies kannst du durch die 
   Suche nach "Systemsteuerung" oder "Control Panel" tun.
   
2. Klicke auf "Programme".

3. Wähle "Windows Features aktivieren oder deaktivieren" aus

4. Aktiviere "VM-Plattform".

5. Klicke auf "OK", um die Installation des "VM-Plattform"-Features zu starten.


# Schritt 2: Amazon Appstore-App installieren

1. Suche im Microsoft Store nach der **Amazon Appstore**-App und installiere sie.


# Schritt 3: WSA konfigurieren

1. Öffne dann, nachdem du deinen Computer neugestartet hast, das Programm "Windows Subsystem für Android"

2. Klicke in der Seitenleiste auf "Erweiterte Einstellungen".

3. Aktiviere den "Entwicklermodus".

4. Kehre zu der Einstellung "System" zurück.

5.   Klicke bei "Sytem -> Dateien" auf "Öffnen (Symbol mit einem Rechteck und einem Pfeil rechts oben)".

   Windows Subsystem für Android wird jetzt gestartet. Dies kann einige Minuten dauern. Du wirst möglicherweise aufgefordert, Windows Subsystem für Android zugriff auf dein Netzwerk zu geben. Klicke einfach auf "Zulassen".

6. Wenn die Dateien-App geöffnet ist, minimiere sie, aber **schließe sie nicht**!


# Schritt 4: Aurora Store installieren

1. Öffne das Programm "Windows PowerShell" **als Administrator**.

2. Gib den folgenden Befehl ein und drücke "ENTER":

   ```md
   iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/corbindavenport/nexus-tools/main/install.ps1'))
   ```

3. Bestätige alles mit "Y" und drücke "ENTER".

   :::tip Tipp

   Wenn die Installation fehlschlägt kannst du die Treiber [HIER](https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi) manuell herunterladen und installieren! Starte danach deinen Computer neu!

   :::

4. Klicke [HIER](https://auroraoss.com/AuroraStore/Stable/AuroraStore-4.4.2.apk) um "Aurora Store", eine
   alternative für den Google Playstore herunterzuladen!

5. Drücke gleichzeitig die Windows-Taste und "R".

   Gebe "downloads" in das Eingabefeld ein und klicke auf "OK".

6. Dein Download-Ordner wird geöffnet. Gebe oben in der Leiste (wo normalerweise so etwas wie "Dieser PC" steht) "cmd" ein und drücke "ENTER".

7. Die Eingabeaufforderung wird geöffnet. Gebe darin den folgenden Befehl ein:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Du erhältst wahrscheinlich die Meldung "failed to authenticate to 127.0.0.1:58526", was normal ist. Suche in der Taskleiste nach dem Fenster, in dem nach der Erlaubnis für "ADB-Debugging" gefragt wird. Klicke auf "Von diesem Computer immer zulassen" und dann auf "Zulassen".

8. Gib den gleichen Befehl erneut in die Eingabeaufforderung ein:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Jetzt sollte entweder "already connected" oder "successfully connected" angezeigt werden.

9. Gib diesen Befehl ein:

   ```md
   adb install .\AuroraStore-4.4.2.apk
   ```

   Warte, bis die Meldung "Success" erscheint!


# Schritt 5: Aurora Store konfigurieren

1. Öffne die App "Aurora Store" (Du kannst sie in der Windows Suche finden).

2. Klicke so oft auf "Weiter" bis du das Setup abgeschlossen hast.

3. Wähle beim einloggen den Accounttyp "Anonym" aus.

4. Jetzt kannst du dir Apps/Spiele aus dem Aurora Store installieren! :)