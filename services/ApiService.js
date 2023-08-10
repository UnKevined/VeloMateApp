class ApiService {
    async fetchEvents() {
      try {
        // Hier kannst du den tatsächlichen Datenabruf implementieren
        const response = await fetch('https://api.example.com/events');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
      }
    }
    // Weitere Methoden für andere API-Aufrufe hinzufügen
  }
  
  export default new ApiService();
  