

const loadquote = () => {
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => loadData(data));
}

const loadData = quote =>{
    const quoteContainer = document.getElementById('quote');
    console.log(quoteContainer)
    quoteContainer.innerHTML = quote.quote;
}



loadquote();