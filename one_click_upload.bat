@echo off

REM ########################################################
REM # 1. BEREINIGUNG (Löscht alle .bak Dateien im Ordner und Unterordnern)
REM # ########################################################
echo.
echo Starte Projektbereinigung: Lösche alle *.bak Dateien...
REM Der Befehl /S löscht die Dateien auch in Unterordnern. /Q verhindert eine Bestätigungsaufforderung.
del /S /Q *.bak

echo.
echo Bereinigung abgeschlossen.

REM ########################################################
REM # 2. GIT UPLOAD (Startet das PowerShell Skript)
REM # ########################################################
echo Starte Git-Upload-Skript...
PowerShell.exe -ExecutionPolicy Bypass -File "%~dp0scripts_ps1\upload.ps1"
pause