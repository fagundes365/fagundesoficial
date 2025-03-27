let nome = prompt("Digite seu nome:");
let msg = [
    'Grandes guerreiros são forjados no fogo. Não tenha medo do processo.',
    'Não perca a esperança, mantenha a fé',
    'Mantenha o foco, FACA NA CAVEIRA!!!',
    'Acredite no tempo certo que Deus tem para você',
    'Eu sei que você vencerá qualquer desafio, basta ter disciplina'
];
if (nome) {
    let randomMsg = msg[Math.floor(Math.random() * msg.length)];
    alert(`Olá, ${nome}! ${randomMsg}!`);
} else {
    let name = prompt("Digite SEU NOME:");
    let randomMsg = msg[Math.floor(Math.random() * msg.length)];
    alert(`Olá, ${name}! ${randomMsg}!`);
    let sum = parseInt(prompt("Digite seu número da sorte:"));
    if (!isNaN(sum)) {
        alert(`Seu número da sorte é: ${sum}`);
    }
}