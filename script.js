let participantes = ["Juan", "Maria", "Pedro", "Ana", "Luis", "Carlos"];
let participantesRestantes = [...participantes];
let escolhidos = [];
let resultadoElement = document.getElementById('resultado');

for (let i = 0; i < participantes.length; i++) {
  let posição = Math.floor(Math.random() * participantesRestantes.length);
  let escolhido = participantesRestantes[posição];

  while (escolhido === participantes[i]) {
    posição = Math.floor(Math.random() * participantesRestantes.length);
    escolhido = participantesRestantes[posição];
  }

  console.log(`${participantes[i]} recebeu ${escolhido}`);

  participantesRestantes.splice(posição, 1);
  escolhidos.push(escolhido);

  // Adiciona o resultado à lista no HTML
  let listItem = document.createElement('li');
  listItem.textContent = `${participantes[i]} recebeu ${escolhido}`;
  resultadoElement.appendChild(listItem);
}
