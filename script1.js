//1)   Get all the countries from Asia continent /region using Filter function 


const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch all countries
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Extract country names
    const asiaCountryNames = asiaCountries.map(country => country.name.common);

    // Log the list of Asian countries
    console.log(asiaCountryNames);
  })
  .catch(error => console.error('Error fetching data:', error));