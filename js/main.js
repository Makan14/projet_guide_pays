let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = "India";
    let finalURL = 'https://restcountries.com/v3.1/all';
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        console.log(data[0]);  
        console.log(data[0].capital[0]);  
    })
});