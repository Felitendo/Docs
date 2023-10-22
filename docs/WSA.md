---
sidebar_label: 'Android Apps auf dem PC installieren'
sidebar_position: 3
---
import ReactPlayer from 'react-player'


In diesem Tutorial lernst du, wie du WSA (Windows Subsystem für Android) auf deinem Computer installieren kannst und du somit alle Android Apps auf deinem PC installieren kannst.

:::danger Achtung

Dieses Tutorial funktioniert nur, wenn dein Computer **Windows 11** oder höher als Betriebssystem hat!

:::

1. Suche auf deinem Windows 11 Computer nach "Systemsteuerung" oder "Control Panel" und öffne es.

   ![Control-Panel-Search](https://files.felo.gg/u/NVIDIA_Share_2SX6GkDjjh.png)

   Klicke dann auf "Programme"

   ![Control-Panel-Programme](https://files.felo.gg/u/explorer_VUdtDj08kz.png)

   Klicke dann auf "Windows Features aktivieren oder deaktivieren"

   ![Control-Panel-activate](https://files.felo.gg/u/explorer_EwnElJI7Cc.png)

   Wähle dann "VM-Plattform" aus

   ![Control-Panel-VM](https://files.felo.gg/u/OptionalFeatures_JDC4lKWLDI.png)

   Klicke dann auf "Ok" und das "VM-Plattform"-Feature sollte installiert werden

2. **Amazon Appstore**-App im Microsoft Store suchen und danach installieren

   ![Amazon-Bild](https://files.felo.gg/u/ApplicationFrameHost_XJaQWrUZy7.png)

   ![Amazon-Install](https://files.felo.gg/u/ApplicationFrameHost_3QNjmh9lxl.png)

   ![Amazon-Install2](https://files.felo.gg/u/thorium_2OLcKWwXR4.png)

   ![Amazon-Install3](https://files.felo.gg/u/ApplicationFrameHost_8GIoQhWGin.png)

3. Öffne dann, nachdem du deinen PC neugestartet hast, das Programm "Windows Subsystem für Android"

   ![WSA-Programm](https://files.felo.gg/u/NVIDIA_Share_8j5uffJ1BV.png)

   Klicke dann links in der Leiste auf "Erweiterte Einstellungen"

   ![](https://files.felo.gg/u/ApplicationFrameHost_icTKud7dl2.png)

   Schalte dann den "Entwicklermodus" auf "ein"

   ![](https://files.felo.gg/u/ApplicationFrameHost_BPbgSDQPMm.png)

4. Gehe zu "System" zurück

   ![](https://files.felo.gg/u/ApplicationFrameHost_LXXRs6KOyn.png)

   Klicke bei "Dateien" auf Öffnen

   ![](https://files.felo.gg/u/ApplicationFrameHost_5AneecaBp7.png)

   Jetzt sollte sich dieses Fenster öffnen:

   ![](https://files.felo.gg/u/WsaClient_ALrXnMCPQM.png)

   Windows Subsystem für Android wird jetzt gestartet. Das kann einige Minuten dauern. Du wirst warscheinlich eine Aufforderung bekommen, dass Windows Subsystem für Android auf dein Netzwerk zugreifen will. Klicke einfach auf "Zulassen". Falls es nach 10min noch nicht gestartet ist, musst du deinen PC neustarten und es nochmal versuchen.

5. Wenn dann die Dateien App sich endlich geöffnet hat, musst du sie *minimieren* **ACHTUNG: Nicht schließen**!

6. Führe jetzt das Programm "Windows Powershell" **als Administrator** aus!

   ![](https://files.felo.gg/u/NVIDIA_Share_PjfTG9bOYh.png)

   Gebe darin den folgenden Befehl ein und drücke "ENTER":

   ```md
   iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/corbindavenport/nexus-tools/main/install.ps1'))
   ```

   ![](https://files.felo.gg/u/powershell_kjA7zCnWRs.png)

   Gebe dann "Y" ein und drücke "ENTER"

   :::tip Tipp

   Wenn die installation fehlschlägt kannst du [hier](https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi) die Treiber manuell herunterladen! Danach musst du die Datei einfach ausführen und installieren! Wichtig: Starte deinen Computer danach neu!

   :::

7. Klicke jetzt [HIER](https://auroraoss.com/AuroraStore/Stable/AuroraStore_4.3.5.apk) um eine alternative für den Google Playstore herunterzuladen!

8. Rechtsklicke jetzt das Windows Symbol in deiner Taskleiste und klicke auf "Ausführen"

   ![](https://files.felo.gg/u/explorer_6mPHs6mHTW.png)

   Gebe dann in das Kästchen "downloads" ein und klicke auf "Ok"

   ![](https://files.felo.gg/u/explorer_pCjzqqnQVc.png)

9. Jetzt müsste sich dein Download Ordner geöffnet haben. In diesem musst du oben in die Leiste "cmd" eingeben und "ENTER" drücken!

   ![](https://files.felo.gg/u/explorer_wZDsxw6ADe.png)

   Jetzt hat sich die "Eingabeaufforderung" geöffnet. In dieser musst du jetzt folgenden Befehl eingeben:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Jetzt müsste in der Eingabeaufforderung folgendes stehen: "failed to authenticate to 127.0.0.1:58526". Das ist normal. Du musst jetzt in deiner Taskleiste nach dem Fenster suchen, in dem gefragt wird, ob "ADB-Debugging" zugelassen werden soll. Klicke auf "Von diesem Computer immer zulassen" und dann auf "Zulassen"!

   ![](https://files.felo.gg/u/BnWL5ijhjy.png)

   Gebe jetzt nochmal den gleichen Befehl in deine Eingabeaufforderung ein:

   ```md
   adb connect 127.0.0.1:58526
   ```

   Jetzt sollte entweder "already connected" oder "successfuly connected" dort stehen.

   Gebe jetzt diesen Befehl ein:

   ```md
   adb install .\AuroraStore_4.3.5.apk
   ```

   Warte jetzt bis die Nachricht "Success" erscheint!

10. Öffne jetzt das Programm "Aurora Store"

   ![](https://files.felo.gg/u/NVIDIA_Share_pMzlIa6LtU.png)

   Klicke auf "weiter":

   ![](https://files.felo.gg/u/WsaClient_LUmV6cbVWS.png)

   Klicke auf "weiter":

   ![](https://files.felo.gg/u/WsaClient_EfAjxfeGIF.png)

   Klicke auf "weiter":

   ![](https://files.felo.gg/u/WsaClient_iX4vjdYZl0.png)

   Klicke auf "weiter":

   ![](https://files.felo.gg/u/WsaClient_CcX9AEVj97.png)

   Schaue dir das Tutorial Video an indem gezeigt wird, wie man Aurora Store fertig einrichtet und eine App (in dem Fall Spotify) installieren kann:

   <div className="video__wrapper">
   <ReactPlayer className="video__player" controls height="100%" url="https://files.felo.gg/u/Desktop%202023.10.22%20-%2019.37.03.04.mp4" width="100%" />
   </div>

11. Ende :)