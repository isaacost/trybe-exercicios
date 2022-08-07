// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    // Adicionar lógica aqui!
    const aqui = document.getElementById('jokeContainer');
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data =>
            aqui.innerText = data.joke
        );
};

window.onload = () => fetchJoke();