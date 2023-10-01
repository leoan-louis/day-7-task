//2)   Get all the countries with a population of less than 2 lakhs using Filter function


const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch all countries
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Filter countries with population less than 200,000
    const smallPopulationCountries = data.filter(country => {
      const population = country.population;
      return population < 200000;
    });

    // Extract country names
    const smallPopulationCountryNames = smallPopulationCountries.map(country => country.name.common);

    // Log the list of countries with small populations
    console.log(smallPopulationCountryNames);
  })
  .catch(error => console.error('Error fetching data:', error));