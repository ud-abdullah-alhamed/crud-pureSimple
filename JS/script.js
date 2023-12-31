// script.js
async function fetchPosts() {
  const apiUrl = 'https://apiservicesavxav.azurewebsites.net/api/Movies';
  const tableBody = document.querySelector('#postsTable tbody');

  try {
      const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Clear existing table rows
      tableBody.innerHTML = '';

      // Populate table rows with API data
      data.forEach(post => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.genre}</td>
          `;
          tableBody.appendChild(row);
      });

  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchPosts);
});
