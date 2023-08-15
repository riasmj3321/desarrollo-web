const apiUrl = 'https://rickandmortyapi.com/api/character/';

async function fetchCharacterList(page) {
  try {
    const response = await fetch(apiUrl + `?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function createPaginationLinks(pages, currentPage) {
  const paginationContainer = document.getElementById('pagination');

  let paginationHTML = '';
  for (let i = 1; i <= pages; i++) {
    paginationHTML += `<a href="#" class="pagination-link ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</a>`;
  }

  paginationContainer.innerHTML = paginationHTML;

  const paginationLinks = document.querySelectorAll('.pagination-link');
  paginationLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const newPage = parseInt(link.getAttribute('data-page'));
      displayCharacterList(newPage);
    });
  });
}

async function displayCharacterList(page = 1) {
  const characterData = await fetchCharacterList(page);

  if (characterData) {
    const characterListContainer = document.getElementById('character-list');
    characterListContainer.innerHTML = ''; // Limpiar el contenido actual

    characterData.results.forEach(character => {
      const characterCard = `
        <div class="character-card">
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
          <p>Género: ${character.gender}</p>
          <p>Especie: ${character.species}</p>
          <!-- Agrega más propiedades según tus necesidades -->
        </div>
      `;
      characterListContainer.insertAdjacentHTML('beforeend', characterCard);
    });

    createPaginationLinks(characterData.info.pages, page);
  } else {
    characterListContainer.textContent = 'No se pudieron obtener los personajes.';
  }
}

displayCharacterList(); // Mostrar la lista de personajes al cargar la página
