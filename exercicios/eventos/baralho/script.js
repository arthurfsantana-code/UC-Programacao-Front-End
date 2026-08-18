const imagem = document.querySelector('img');
let cartasRestantes = [...baralho]; // cria uma cópia do array

imagem.addEventListener('click', function() {
  if (cartasRestantes.length === 0) {
    alert('Não há mais cartas no baralho!');
    return;
  }

  // seleciona uma carta aleatória
  const indiceAleatorio = Math.floor(Math.random() * cartasRestantes.length);
  const carta = cartasRestantes[indiceAleatorio];

  // exibe a imagem da carta
  imagem.src = carta.imagem;
  imagem.alt = `${carta.valor} de ${carta.naipe}`;

  // remove a carta do array
  cartasRestantes.splice(indiceAleatorio, 1);
});
