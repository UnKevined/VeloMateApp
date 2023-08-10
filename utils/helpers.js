// helpers.js

// Eine Hilfsfunktion zum Formatieren von Datumsangaben
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  }
  
  // Eine Hilfsfunktion zur Prüfung, ob ein Benutzer angemeldet ist
  export function isLoggedIn(user) {
    return user !== null && user !== undefined;
  }
  
  // Weitere Hilfsfunktionen hinzufügen
  