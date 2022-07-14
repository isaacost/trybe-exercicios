const substituiX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');

    for (let i = 0; i < fraseArray.length; i += 1) {
        if (fraseArray[i] === 'x') {
            fraseArray[i] = nome;
        }
    }

    return fraseArray.join(' ');
};

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
    
    Minhas três principais habilidades são:`;

    skills.forEach((skills) => {
        resultado = `${resultado}
    - ${skills}`;
    });
    return resultado;
};

console.log(minhasSkills(substituiX('Isa')));