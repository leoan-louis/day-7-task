//4)   Print the total population of countries using reduce function


const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch all countries
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Use reduce to calculate total population
    const totalPopulation = data.reduce((acc, country) => {
      return acc + country.population;
    }, 0);

    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => console.error('Error fetching data:', error));