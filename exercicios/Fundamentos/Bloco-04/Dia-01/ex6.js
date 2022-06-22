let peca = 'Rainha'.toLowerCase();

switch (peca) {
    case 'peao':
        console.log('movimento uma casa para frente');
        break;  
    case 'cavalo':
        console.log('movimento em L');
        break;
    case 'bisbo':
        console.log('movimento na diagonal');
        break;
    case 'torre':
        console.log('movimento em linha reta');
        break;
    case 'rainha':
        console.log('movimento em qualquer direção');
        break;
    case 'rei':
        console.log('movimento em qualquer direção mas apenas uma casa');
        break;
    default:
        console.log('peça não encontrada')

}