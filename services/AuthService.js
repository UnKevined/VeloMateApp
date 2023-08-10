class AuthService {
    async login(username, password) {
      try {
        // Hier kannst du den tatsächlichen Authentifizierungsprozess implementieren
        const response = await fetch('https://api.example.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
    }
    // Weitere Authentifizierungsmethoden hinzufügen
  }
  
  export default new AuthService();
  