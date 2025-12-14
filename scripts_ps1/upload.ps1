# Git Upload Skript (PowerShell)
# Autor: Gemini

# --- KONFIGURATION ---
# Hier müssen Sie NICHTS ändern, wenn Sie das Skript im Hauptordner speichern.

# Hinzufügen aller geänderten und neuen Dateien
git add .

# Fragen nach der Commit-Nachricht
$commitMessage = Read-Host "Bitte geben Sie eine kurze Beschreibung der vorgenommenen Änderungen ein (z.B. 'Fix: Impressum korrigiert')"

# Commit ausführen
git commit -m $commitMessage

# Hochladen auf GitHub
Write-Host "Starte den Upload (git push origin main)..."
git push origin main

Write-Host "==================================================="
Write-Host "✅ Upload erfolgreich abgeschlossen. Prüfen Sie GitHub."
Write-Host "🌐 Das Deployment auf GitHub Pages beginnt jetzt und sollte in 1-2 Minuten online sein."
Write-Host "==================================================="

# Beibehalten der Shell für die Lesbarkeit der Meldungen
Read-Host "Drücken Sie eine Taste, um das Fenster zu schließen..."