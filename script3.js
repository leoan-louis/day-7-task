//3)    Print the following details name, capital, flag using forEach function



const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch all countries
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Iterate through each country
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital[0];
      const flag = country.flags.svg;

      console.log(`Country Name: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Flag: ${flag}`);
      console.log('---------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));

