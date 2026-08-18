const btnCao = document.getElementById('btn-cao');
const btnGato = document.getElementById('btn-gato');
const btnBackground = document.getElementById('btn-background');
const imagemPet = document.getElementById('imagem-pet');
const tituloPet = document.getElementById('titulo-pet');

const urlsCachorro = [
  'https://images.unsplash.com/photo-1633722715463-d30628519b2b?w=400',
  'https://images.unsplash.com/photo-1587300411107-ec56fc4349be?w=400',
  'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400',
  'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=400',
  'https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400'
];

const urlsGato = [
  'https://images.unsplash.com/photo-1574158622147-696b80bd0e3b?w=400',
  'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400',
  'https://images.unsplash.com/photo-1568152950566-c1bf43f0a86d?w=400',
  'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400',
  'https://images.unsplash.com/photo-1513360371669-4a df3646dc94?w=400'
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
