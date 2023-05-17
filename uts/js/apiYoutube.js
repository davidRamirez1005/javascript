
document.getElementById('buscar').addEventListener('click', searchVideos);

function searchVideos() {
    // Obtener el valor ingresado por el usuario
    let searchQuery = document.getElementById('searchInput').value;

    // Configurar los parámetros de la solicitud
    let apiKey = 'AIzaSyCt956h4SiS3pYtLUAZg0oLCCreet6GOiY'; // Reemplaza con tu clave API de la YouTube Data API
    let maxResults = 10; // Número de resultados a mostrar
    let languageFilter = 'es'; // Filtrar resultados en español

    // Construir la URL de la solicitud GET 
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + encodeURIComponent(searchQuery) + '&maxResults=' + maxResults + '&key=' + apiKey + '&relevanceLanguage=' + languageFilter;

    // Realizar la solicitud GET utilizando Fetch
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud. Código de estado: ' + response.status);
            }
        })
        .then(function (data) {
            // Procesar la respuesta
            // Aquí puedes acceder a los datos devueltos por la API y realizar las acciones necesarias
            displayResults(data.items);
        })
        .catch(function (error) {
            // Ha ocurrido un error durante la solicitud
            console.log('Error en la solicitud:', error.message);
        });

    document.getElementById("searchInput").value = ""
}

function displayResults(items) {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    items.forEach(function (item) {
        // Obtener datos relevantes del resultado
        let title = item.snippet.title;
        let description = item.snippet.description;
        let thumbnailUrl = item.snippet.thumbnails.default.url;
        let videoId = item.id.videoId;

        // Crear la tarjeta HTML para el resultado
        let card = document.createElement('div');
        card.className = 'card';

        let thumbnail = document.createElement('img');
        thumbnail.src = thumbnailUrl;

        let titleElement = document.createElement('h2');
        titleElement.textContent = title;

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        let link = document.createElement('a');
        link.href = 'https://www.youtube.com/watch?v=' + videoId;
        link.textContent = 'Ver en YouTube';

        card.appendChild(thumbnail);
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(link);

        resultsContainer.appendChild(card);
    });
}
