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
   
   ![Control-Panel-Search](https://files.felo.gg/u/NVIDIA_Share_2SX6GkDjjh.png)

2. Klicke auf "Programme".

   ![Control-Panel-Programme](https://files.felo.gg/u/explorer_VUdtDj08kz.png)

3. Wähle "Windows Features aktivieren oder deaktivieren" aus

   ![Control-Panel-activate](https://files.felo.gg/u/explorer_EwnElJI7Cc.png)

4. Aktiviere "VM-Plattform".

   ![Control-Panel-VM](https://files.felo.gg/u/OptionalFeatures_JDC4lKWLDI.png)

5. Klicke auf "OK", um die Installation des "VM-Plattform"-Features zu starten.


# Schritt 2: Amazon Appstore-App installieren

1. Suche im Microsoft Store nach der **Amazon Appstore**-App und installiere sie.

   ![Amazon-Bild](https://files.felo.gg/u/ApplicationFrameHost_XJaQWrUZy7.png)

   ![Amazon-Install](https://files.felo.gg/u/ApplicationFrameHost_3QNjmh9lxl.png)

   ![Amazon-Install2](https://files.felo.gg/u/thorium_2OLcKWwXR4.png)

   ![Amazon-Install3](https://files.felo.gg/u/ApplicationFrameHost_8GIoQhWGin.png)

# Schritt 3: WSA konfigurieren

1. Öffne dann, nachdem du deinen Computer neugestartet hast, das Programm "Windows Subsystem für Android"

   ![WSA-Programm](https://files.felo.gg/u/NVIDIA_Share_8j5uffJ1BV.png)

2. Klicke in der Seitenleiste auf "Erweiterte Einstellungen".

   ![](https://files.felo.gg/u/ApplicationFrameHost_icTKud7dl2.png)

3. Aktiviere den "Entwicklermodus".

   ![](https://files.felo.gg/u/ApplicationFrameHost_BPbgSDQPMm.png)

4. Kehre zu der Einstellung "System" zurück.

   ![](https://files.felo.gg/u/ApplicationFrameHost_LXXRs6KOyn.png)

5.   Klicke bei "Dateien" auf "Öffnen".

   ![](https://files.felo.gg/u/ApplicationFrameHost_5AneecaBp7.png)

   Jetzt sollte sich dieses Fenster öffnen:

   ![](https://files.felo.gg/u/WsaClient_ALrXnMCPQM.png)

   Windows Subsystem für Android wird jetzt gestartet. Dies kann einige Minuten dauern. Du wirst möglicherweise aufgefordert, Windows Subsystem für Android zugriff auf dein Netzwerk zu geben. Klicke einfach auf "Zulassen".

6. Wenn die Dateien-App geöffnet ist, minimiere sie, aber **schließe sie nicht**!


# Schritt 4: Aurora Store installieren

1. Öffne das Programm "Windows PowerShell" **als Administrator**.

   ![](https://files.felo.gg/u/NVIDIA_Share_PjfTG9bOYh.png)

2. Gib den folgenden Befehl ein und drücke "ENTER":

   ```md
   iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/corbindavenport/nexus-tools/main/install.ps1'))
   ```

3. Bestätige alles mit "Y" und drücke "ENTER".

   :::tip Tipp

   Wenn die Installation fehlschlägt kannst du die Treiber [HIER](https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi) manuell herunterladen und installieren! Starte danach deinen Computer neu!

   :::

4. Klicke [HIER](https://auroraoss.com/AuroraStore/Stable/AuroraStore_4.3.5.apk) um "Aurora Store", eine
   alternative für den Google Playstore herunterzuladen!

5. Klicke mit der rechten Maustaste auf das Windows-Symbol in der Taskleiste und wähle "Ausführen".

   ![](https://files.felo.gg/u/explorer_6mPHs6mHTW.png)

   Gebe "downloads" in das Eingabefeld ein und klicke auf "OK".

   ![](https://files.felo.gg/u/explorer_pCjzqqnQVc.png)

6. Dein Download-Ordner wird geöffnet. Gebe oben in der Leiste "cmd" ein und drücke "ENTER".

   ![](https://files.felo.gg/u/explorer_wZDsxw6ADe.png)

7. Die Eingabeaufforderung wird geöffnet. Gebe darin den folgenden Befehl ein:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Du erhältst wahrscheinlich die Meldung "failed to authenticate to 127.0.0.1:58526", was normal ist. Suche in der Taskleiste nach dem Fenster, in dem nach der Erlaubnis für "ADB-Debugging" gefragt wird. Klicke auf "Von diesem Computer immer zulassen" und dann auf "Zulassen".

   ![](https://files.felo.gg/u/BnWL5ijhjy.png)

8. Gib den gleichen Befehl erneut in die Eingabeaufforderung ein:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Jetzt sollte entweder "already connected" oder "successfully connected" angezeigt werden.

9. Gib diesen Befehl ein:

   ```md
   adb install .\AuroraStore_4.3.5.apk
   ```

   Warte, bis die Meldung "Success" erscheint!


# Schritt 5: Aurora Store konfigurieren

1. Öffne die App "Aurora Store".

   ![](https://files.felo.gg/u/NVIDIA_Share_pMzlIa6LtU.png)

2. Klicke auf "Weiter":

   ![](https://files.felo.gg/u/WsaClient_LUmV6cbVWS.png)

3. Klicke erneut auf "Weiter":

   ![](https://files.felo.gg/u/WsaClient_EfAjxfeGIF.png)

4. Klicke erneut auf "Weiter":

   ![](https://files.felo.gg/u/WsaClient_iX4vjdYZl0.png)

5. Klicke erneut auf "Weiter":

   ![](https://files.felo.gg/u/WsaClient_CcX9AEVj97.png)

6. Sehe dir das Tutorial-Video an, in dem gezeigt wird, wie du den Aurora Store abschließend einrichtest
   und eine Android App (in diesem Fall Spotify) installierst:

   <div className="video__wrapper">
   <ReactPlayer className="video__player" controls height="100%" url="https://files.felo.gg/u/Desktop%202023.10.22%20-%2019.37.03.04.mp4" width="100%" />
   </div>