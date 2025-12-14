// Zentrale JavaScript-Datei für die Website-Funktionalität

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================
    // 1. ZENTRALE VARIABLEN-DEFINITION (HIER ANPASSEN!)
    // =========================================================
    const FIRMENNAME = "Test"; // <--- HIER IHREN FIRMENNAMEN EINTRAGEN

    // =========================================================
    // 2. AUTOMATISCHE TEXT-ERSETZUNG
    // =========================================================
    
    // Sucht alle Elemente mit dem Attribut 'data-text-replace' 
    // und alle Elemente mit der Klasse 'firma-name'
    const elementsToReplace = document.querySelectorAll('[data-text-replace], .firma-name');
    
    elementsToReplace.forEach(element => {
        // Der Platzhalter, der in allen HTML-Dateien verwendet wird
        const placeholder = '[Firmenname]';
        
        // Prüft, ob der Platzhalter im Textinhalt des Elements vorkommt
        if (element.textContent.includes(placeholder)) {
            // Ersetzt den Platzhalter durch den zentral definierten FIRMENNAMEN
            element.textContent = element.textContent.replace(placeholder, FIRMENNAME);
        }
    });

    // Bonus: Stellt sicher, dass auch der <title>-Tag im Browser ersetzt wird
    if (document.title.includes('Ihr Name Elektriker')) {
        document.title = document.title.replace('Ihr Name Elektriker', FIRMENNAME);
    }
});