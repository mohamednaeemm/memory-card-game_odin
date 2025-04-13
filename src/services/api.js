export const fetchCards = async (difficulty) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
    const cardCounts = {
      easy: 5,
      medium: 10,
      hard: 20,
    };
  
    const count = cardCounts[difficulty] || 5; // Default to 5 if difficulty is invalid
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Card ${i + 1}`,
      image: `https://via.placeholder.com/150?text=Card+${i + 1}`
    }));
  };