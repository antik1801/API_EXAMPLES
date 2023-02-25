const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries')
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country','text-dark','mx-4','px-4','mb-2','py-2');
        countryDiv.innerHTML = `
        <h3>Name: </h3> 
        `
        countriesContainer.appendChild(countryDiv);
        console.log('fish');
    });
}
loadCountries();