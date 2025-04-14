export const fetchCards = async (difficulty) => {

    const cardCounts = {
      easy: 5,
      medium: 10,
      hard: 20,
    };
  
    const limit = cardCounts[difficulty] || 5;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
  
      const data = await response.json();
      const pokemonList = data.results;
  
      // Map Pokémon data to our card format, fetching additional details for each Pokémon
      const cards = await Promise.all(pokemonList.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }
  
        const pokemonData = await pokemonResponse.json();
        return {
          id: pokemonData.id,
          name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1), // Capitalize name
          image: pokemonData.sprites.front_default || 'https://via.placeholder.com/150?text=No+Image' // Fallback image
        };
      }));
  
      return cards;
  
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      // Fallback: return placeholder cards if API fails
      return Array.from({ length: limit }, (_, i) => ({
        id: i + 1,
        name: `Card ${i + 1}`,
        image: `https://via.placeholder.com/150?text=Card+${i + 1}`
      }));
    }
  };