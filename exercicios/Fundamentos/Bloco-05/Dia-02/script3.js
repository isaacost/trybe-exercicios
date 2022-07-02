// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');

for (let i = pai.childNodes.length - 1; i >= 0; i--) {
    const filhoAtual = pai.childNodes[i];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.removeChild();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.removeChild();