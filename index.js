"use strict";
//Exercicio 1
const identificationMock = 'alo@gama.com';
const passwordMock = 'aloSenha1';
function login(identification, password) {
    if (identification === identificationMock && password === passwordMock) {
        return true;
    }
    return false;
}
console.log(login('alo@gama.com', 'aloSenha1'));
console.log(login('teste', '123'));
const produto = {
    nome: 'garrafa',
    codigoBarras: 12345436547,
    preco: 19.90
};
const produto2 = {
    nome: 'caneca',
    codigoBarras: 12345436547,
    preco: 24.90,
    desconto: 2.49
};
//Exercicio 3
const listaDeProdutos = [produto, produto2];
function listProdutos(lista) {
}
