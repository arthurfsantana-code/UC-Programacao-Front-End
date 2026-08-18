const paragrafo = document.querySelector('p');
let tamanhoAtual = 48; // tamanho padrão em pixels
const tamanhoMaximo = 80; // tamanho máximo antes de explodir

document.addEventListener('keydown', function(evento) {
  if (paragrafo.textContent === '💥') {
    return; // não faz nada se o balão já explodiu
  }

  if (evento.key === 'ArrowUp') {
    evento.preventDefault(); // impede scroll da página
    tamanhoAtual *= 1.1; // infla 10%

    if (tamanhoAtual > tamanhoMaximo) {
      paragrafo.textContent = '💥';
      document.removeEventListener('keydown', arguments.callee);
    } else {
      paragrafo.style.fontSize = tamanhoAtual + 'px';
    }
  }

  if (evento.key === 'ArrowDown') {
    evento.preventDefault(); // impede scroll da página
    tamanhoAtual *= 0.9; // desinfla 10%
    paragrafo.style.fontSize = tamanhoAtual + 'px';
  }
});

paragrafo.style.fontSize = tamanhoAtual + 'px';
