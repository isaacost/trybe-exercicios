const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), messageDelay());
};

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo