const loadQuotes = () =>{
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = quote =>{
    const block = document.getElementById('quote');
    console.log(quote);
    block.innerText = quote.quote;
}
loadQuotes();