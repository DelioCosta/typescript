//Exercicio 1
const identificationMock: string = 'alo@gama.com';
const passwordMock: string = 'aloSenha1';

function login(identification: string, password: string): boolean {
    if(identification === identificationMock && password === passwordMock){
        return true;
    } 
    return false;
}

console.log(login('alo@gama.com', 'aloSenha1'));

console.log(login('teste', '123'));

//Exercicio 2

type Produto = {
    nome: string,
    codigoBarras: number,
    preco: number,
    desconto?: number
}

const produto: Produto = {
    nome: 'garrafa',
    codigoBarras: 12345436547,
    preco: 19.90
};

const produto2: Produto = {
    nome: 'caneca',
    codigoBarras: 12345436547,
    preco: 24.90,
    desconto: 2.49
};

//Exercicio 3

const listaDeProdutos: Produto[] = [produto, produto2];

function listProdutos(lista: Produto[]){
    
}