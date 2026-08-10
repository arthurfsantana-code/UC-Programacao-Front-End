// Questão 1
console.log("Questão 1");
const produto1 = {
  nome: "Leite",
  preco: 6.5,
  categoria: "Laticínios"
};

const produto2 = {
  nome: "Maçã",
  preco: 8.9,
  categoria: "Hortifruti"
};

function exibirProdutoMaisCaro(produtoA, produtoB) {
  const maisCaro = produtoA.preco >= produtoB.preco ? produtoA : produtoB;

  console.log(
    `O produto mais caro é ${maisCaro.nome}, da categoria ${maisCaro.categoria}, com preço de R$ ${maisCaro.preco.toFixed(2)}.`
  );

  return maisCaro;
}

exibirProdutoMaisCaro(produto1, produto2);
console.log("\n");





// Questão 2
console.log("Questão 2");
const aluno = {
  nome: "Maria",
  idade: 18,
  curso: "Front-End",
  notas: [8, 9, 7, 10, 6]
};

function calcularMediaAluno(alunoObj) {
  const soma = alunoObj.notas.reduce((total, nota) => total + nota, 0);
  alunoObj.media = soma / alunoObj.notas.length;

  console.log(`A média de ${alunoObj.nome} é ${alunoObj.media.toFixed(2)}.`);
  return alunoObj.media;
}

calcularMediaAluno(aluno);
console.log("\n");




// Questão 3
console.log("Questão 3");
const carro = {
  nome: "Onix",
  cor: "Prata",
  modelo: "2024",
  opcionais: {
    "ar condicionado": true,
    "direção helétrica": true,
    multimidia: false
  }
};

function exibirDetalhesCarro(carroObj) {
  console.log(`Carro: ${carroObj.nome}`);
  console.log(`Cor: ${carroObj.cor}`);
  console.log(`Modelo: ${carroObj.modelo}`);
  console.log("Opcionais:", carroObj.opcionais);
}

function alterarOpcional(carroObj, nomeOpcional, valor) {
  if (!(nomeOpcional in carroObj.opcionais)) {
    console.log(`O opcional "${nomeOpcional}" não existe no carro.`);
    return carroObj;
  }

  carroObj.opcionais[nomeOpcional] = valor;
  console.log(`Opcional "${nomeOpcional}" alterado para ${valor}.`);
  return carroObj;
}

exibirDetalhesCarro(carro);
alterarOpcional(carro, "multimidia", true);
console.log("\n");





// Questão 4
console.log("Questão 4");
const produtos_vendas = {
  cafes: [
    {
      sku: 7654,
      marca: "Povo Brasileiro",
      preco: 24.0,
      categoria: "Mercearia"
    },
    {
      sku: 8765,
      marca: "Soberano - Gourmet",
      preco: 29.0,
      categoria: "Mercearia"
    },
    {
      sku: 3467,
      marca: "Dose Certa",
      preco: 27.0,
      categoria: "Mercearia"
    }
  ]
};

const produtos_estoque = {
  cafes: [
    {
      sku: 3467,
      peso: 500.0,
      unidade: "mg",
      estoque: 101
    },
    {
      sku: 7654,
      peso: 250.0,
      unidade: "mg",
      estoque: 182
    },
    {
      sku: 8765,
      peso: 250.0,
      unidade: "mg",
      estoque: 46
    }
  ]
};

const estoquePorSku = new Map(
  produtos_estoque.cafes.map((item) => [item.sku, item])
);

const produtosConsolidados = {
  cafes: produtos_vendas.cafes.map((produto) => ({
    ...produto,
    ...(estoquePorSku.get(produto.sku) || {})
  }))
};

console.log(produtosConsolidados);
console.log("\n");





// Questão 5
console.log("Questão 5");
const carrinho = {
  cliente: "Alice",
  itens: [{ nome: "Smartphone", preco: 2200, quantidade: 1 }],
  cupons: ["MENOS10", "PROMO10", "10PORCENTO"],

  adicionarProduto(nome, preco, quantidade) {
    const produtoExistente = this.itens.find((item) => item.nome === nome);

    if (produtoExistente) {
      produtoExistente.quantidade += quantidade;
    } else {
      this.itens.push({ nome, preco, quantidade });
    }

    return this.itens;
  },

  calcularTotal() {
    this.total = this.itens.reduce(
      (soma, item) => soma + item.preco * item.quantidade,
      0
    );

    return this.total;
  },

  aplicarDesconto(cupom) {
    if (!this.cupons.includes(cupom)) {
      this.cupomUtilizado = null;
      this.total = this.calcularTotal();
      return this.total;
    }

    this.cupomUtilizado = cupom;
    this.total = this.calcularTotal() * 0.9;
    return this.total;
  },

  exibirCupom() {
    console.log({
      cliente: this.cliente,
      itens: this.itens,
      total: this.calcularTotal(),
      cupomUtilizado: this.cupomUtilizado || "Nenhum",
      descontoAplicado: Boolean(this.cupomUtilizado)
    });
  }
};

carrinho.adicionarProduto("Fone de Ouvido", 450, 2);
carrinho.calcularTotal();
carrinho.aplicarDesconto("PROMO10");
carrinho.exibirCupom();
