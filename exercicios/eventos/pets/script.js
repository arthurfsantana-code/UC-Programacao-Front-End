const btnCao = document.getElementById('btn-cao');
const btnGato = document.getElementById('btn-gato');
const btnBackground = document.getElementById('btn-background');
const imagemPet = document.getElementById('imagem-pet');
const tituloPet = document.getElementById('titulo-pet');

const urlsCachorro = [
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=400'
];

const urlsGato = [
  'https://images.pexels.com/photos/1521572/pexels-photo-1521572.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=400'
];

const cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806'];
let indiceCorAtual = 0;

btnCao.addEventListener('click', function() {
  const indiceAleatorio = Math.floor(Math.random() * urlsCachorro.length);
  imagemPet.src = urlsCachorro[indiceAleatorio];
  tituloPet.textContent = 'Cachorrinho';
});

btnGato.addEventListener('click', function() {
  const indiceAleatorio = Math.floor(Math.random() * urlsGato.length);
  imagemPet.src = urlsGato[indiceAleatorio];
  tituloPet.textContent = 'Gatinho';
});

btnBackground.addEventListener('click', function() {
  document.body.style.backgroundColor = cores[indiceCorAtual];
  indiceCorAtual = (indiceCorAtual + 1) % cores.length;
});
