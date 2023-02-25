const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries')
    countries.forEach(country => {
      
        const countryName = country.name.official;
        // const capital = country.capital[0];
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country','text-dark','mx-4','px-4','mb-2','py-2','rounded-4','card');
        countryDiv.innerHTML = `
        <h3>Name: ${countryName}</h3> 
        <h4>Capital: ${country.capital ? country.capital : `No capital`}</h4>
        <div class="footer">
        <button class="btn btn-success" onclick="displayCountryDetails('${country.cca2}')">Details</button>
        </div>
        `
        countriesContainer.appendChild(countryDiv);
        // console.log(country.cca2);
    });
}

const displayCountryDetails =code=>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(response => response.json())
    .then(data => showCountryDetails(data[0]))
    // console.log(apiCode)
}
const showCountryDetails = country =>{
    console.log(country);
    const flag = country.flags.png;
    const name = country.name.common;
    const detailContainer = document.getElementById('country-details')
    detailContainer.classList.add('container','text-center','mb-3')
    detailContainer.innerHTML = `
    <h3>Name: ${name}</h3>
    <img src="${flag}">
    `
    
}
loadCountries();