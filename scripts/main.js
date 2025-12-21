// Zentrale JavaScript-Datei für die Website-Funktionalität

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================
    // 1. ZENTRALE VARIABLEN-DEFINITION (HIER ANPASSEN!)
    // =========================================================
    // ... (Teil 1 bleibt gleich)
	const FIRMENNAME = "AJV Elektro GmbH"; 
	
	// =========================================================
	// 2. AUTOMATISCHE TEXT-ERSETZUNG (VERBESSERT)
	// =========================================================
	
	// Wir erweitern die Suche auf Footer und alle Überschriften, um sicherzugehen
	const elementsToReplace = document.querySelectorAll('[data-text-replace], .firma-name, h3, footer p');
	
	elementsToReplace.forEach(element => {
		const placeholder = '[Firmenname]';
		if (element.textContent.includes(placeholder)) {
			// replaceAll sorgt dafür, dass auch mehrere [Firmenname] im selben Text getauscht werden
			element.innerHTML = element.innerHTML.replaceAll(placeholder, FIRMENNAME);
		}
	});
	
	// Bonus: Browsertab
	if (document.title.includes('[Firmenname]')) {
		document.title = document.title.replaceAll('[Firmenname]', FIRMENNAME);
	}

    // =========================================================
    // 3. AUTOMATISCHE NAVIGATIONSMARKIERUNG (NEU)
    // =========================================================

    // Ermittelt den aktuellen Dateinamen und dekodiert Sonderzeichen/Leerzeichen
    const currentPath = decodeURIComponent(window.location.pathname.split("/").pop());

    // Alle Links in der Navigation suchen
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        // Holt den href-Wert des Links (z.B. "Unsere Arbeit.html")
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

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    menuBtn.addEventListener('click', () => {
        // Schaltet die Klasse 'active' am Menü und am Button um
        mainNav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Optional: Menü schließen, wenn man einen Link klickt
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
});