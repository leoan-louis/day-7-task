//5)    Print the country which uses US Dollars as currency



const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch all countries
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Filter countries using USD as currency
    const countriesWithUSD = data.filter(country => {
      return country.currencies && country.currencies.USD;
    });

    // Extract country names
    const countriesWithUSDNames = countriesWithUSD.map(country => country.name.common);

    // Log the list of countries using USD
    console.log('Countries using USD as currency:');
    console.log(countriesWithUSDNames);
  })
  .catch(error => console.error('Error fetching data:', error));