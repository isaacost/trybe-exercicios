const fetch = require('node-fetch');

const fetchJoke = () => {
    //para funcionar
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    //para dar erro
    // const url = 'api.chucknorris.io/jokes/random?category=dev'; 

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data.value))
        .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

