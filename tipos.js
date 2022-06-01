"use strict";
//Boolean
const contaPaga = false;
//Number
const idade = 27;
const nota = 9.3;
//String
const nome = "Délio Costa";
//Array
const idades = [23, 27, 18, 40];
const idades2 = [35, 68, 23, 18];
//Tuple
let jogadores;
jogadores = ["Délio", 3, true];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
const retornoApi = [123, 'Delio', false];
const retornoApi2 = {
//........
};
//Void
function printar(msg) {
    console.log(msg);
}
//Null e undefined
const u = undefined;
const n = null;
//Object
function criar(objeto) {
    //....
}
criar({ propriedade: 1, });
// criar("Delio") -> vai dar erro
//------------------------------------------------------------
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falhou() {
    return erro('Algo falhou');
}
//função falhou também é do tipo never por retornar uma função do tipo never (erro)
//------------------------------------------------------------
//Union types
const nota2 = 10;
function exibirNota(nota2) {
    console.log(`A nota é :${nota2}`);
}
;
exibirNota(10);
exibirNota('10');
const funcionarios = [{
        nome: "Délio",
        sobrenome: "Costa",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    //......
}
const contato = {
    nome: 'Délio',
    telefone: '99999999'
};
