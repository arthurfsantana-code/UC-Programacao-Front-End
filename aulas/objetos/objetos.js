const pessoa = {
    nome: "Anderson",
    idade: 21,
    vacinas: [],

    vacinar: function () {}
}

function vacinar(obj_pessoa, vacina) {
    obj_pessoa.vacinas.push(vacina)
}

vacinar(pessoa,"Sarampo");
vacinar(pessoa,"Covid-19");

pessoa.email = "anderson@gmail.com";
// delete pessoa.nome;

console.log(pessoa["nome"]);
console.log(pessoa.idade);
console.log(pessoa.email);
console.log(pessoa.vacinas)

console.log(Object.hasOwn(pessoa, "cpf"))
console.log("cpf" in pessoa)
console.log("telefone" in pessoa)
console.log("nome" in pessoa)

// Percorrendo propriedades de objeto
// 1. for in
for (property in pessoa) {
    console.log(pessoa[property])
}

// 2. Object.entries
for (const [key, value] of Object.entries(pessoa)) {
    console.log(key + ' : ' + value);
}