// Acesse o elemento elementoOndeVoceEsta.
let local = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = local.parentElement;
pai.style.color = "blue";
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.Você se lembra dos vídeos da aula anterior, como fazer isso ?
let primeiroFilhoDoFilho = local.firstElementChild;
primeiroFilhoDoFilho.innerText = "elemento filho";
// Acesse o primeiroFilho a partir de pai.
let primeiroFilho = pai.firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroFilho2 = local.previousElementSibling;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let textoAtencao = local.nextSibling;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = local.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

