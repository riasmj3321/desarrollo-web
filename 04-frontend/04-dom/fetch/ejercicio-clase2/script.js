const apiUrl = 'https://rickandmortyapi.com/api/character/';

async function fetchCharacterDetails(characterId) {
  try {
    const response = await fetch(apiUrl + characterId);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function displayCharacterDetails(characterId) {
  const characterDetails = await fetchCharacterDetails(characterId);
  const characterDetailsContainer = document.getElementById('character-details');

  if (characterDetails) {
    // Crear el contenido a mostrar
    const characterInfo = `
      <div class="character-card">
        <h2>${characterDetails.name}</h2>
        <img src="${characterDetails.image}" alt="${characterDetails.name}">
        <p>Género: ${characterDetails.gender}</p>
        <p>Especie: ${characterDetails.species}</p>
        <!-- Agrega más propiedades según tus necesidades -->
      </div>
    `;

    // Insertar el contenido en el contenedor del DOM
    characterDetailsContainer.innerHTML = characterInfo;
  } else {
    characterDetailsContainer.textContent = 'No se pudieron obtener los detalles del personaje.';
  }
}

// Llamada a displayCharacterDetails con un ID de personaje específico
displayCharacterDetails(18); // Cambia el número a un ID válido