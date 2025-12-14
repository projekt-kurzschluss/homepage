document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Die Seite wurde vollständig geladen.');

    // Beispiel für ein einfaches Formular-Feedback (da keine echte E-Mail gesendet werden kann)
    const form = document.querySelector('#termin form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Verhindert das Standard-Senden des Formulars
            e.preventDefault(); 
            
            // In einer echten Umgebung würde hier der Server-Code laufen.
            alert('Ihre Terminanfrage wurde lokal gespeichert. Da dies eine lokale Datei ist, wurde KEINE E-Mail gesendet. Bitte kopieren Sie die Daten und senden Sie sie manuell an info@ihrefirma.de.');

            // Hier könnte man das Formular nach der Anzeige der Nachricht zurücksetzen
            // form.reset(); 
        });
    }

    // Beispiel: Animation für die Navigationslinks
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Sanftes Scrollen zu den Sektionen
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});