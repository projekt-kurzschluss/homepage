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
        const placeholder = '[Firmenname]';
        if (element.textContent.includes(placeholder)) {
            element.textContent = element.textContent.replace(placeholder, FIRMENNAME);
        }
    });

    // Bonus: Stellt sicher, dass auch der <title>-Tag im Browser ersetzt wird
    if (document.title.includes('[Firmenname]')) {
        document.title = document.title.replace('[Firmenname]', FIRMENNAME);
    }

    // =========================================================
    // 3. AUTOMATISCHE NAVIGATIONSMARKIERUNG (NEU)
    // =========================================================

    // Ermittelt den aktuellen Dateinamen (z.B. "termin.html")
    const currentPath = window.location.pathname.split("/").pop();

    // Alle Links in der Navigation suchen
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        // Holt den href-Wert des Links (z.B. "index.html")
        const linkPath = link.getAttribute("href");

        // Wenn die aktuelle Seite mit dem Link übereinstimmt:
        if (currentPath === linkPath) {
            link.classList.add("active");
        } 
        // Sonderfall: Wenn man auf der Startseite ist (Pfad leer), index markieren
        else if ((currentPath === "" || currentPath === "index.html") && linkPath === "index.html") {
            link.classList.add("active");
        }
    });
});