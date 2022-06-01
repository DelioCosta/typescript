//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 27;
const nota: number = 9.3;

//String
const nome: string = "Délio Costa";

//Array
const idades: number[] = [23, 27, 18, 40];
const idades2: Array<number> = [35, 68, 23, 18];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ["Délio", 3, true];

//Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Reprovado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoApi: any[]= [123, 'Delio', false];
const retornoApi2: any = {
 //........
}

//Void
function printar (msg: string): void {
    console.log(msg);
}

//Null e undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar (objeto: object){
    //....
}
criar({propriedade: 1,})
// criar("Delio") -> vai dar erro

//------------------------------------------------------------

//Never
function loopInfinito(): never {
    while(true){ }
}

function erro (mensagem: string): never {
    throw new Error(mensagem);
}

function falhou(){
    return erro('Algo falhou');
}
//função falhou também é do tipo never por retornar uma função do tipo never (erro)

//------------------------------------------------------------

//Union types
const nota2: number | string = 10;
function exibirNota(nota2: number | string){
    console.log(`A nota é :${nota2}`);
};
exibirNota(10);
exibirNota('10');


//------------------------------------------------------------

//Type Alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
    nome: "Délio",
    sobrenome: "Costa",
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    //......
}

//------------------------------------------------------------

//Tipos nulos ou opcionais

type Contato = {
    nome: string,
    telefone: string,
    telefone2?: string
}

const contato: Contato = {
    nome: 'Délio',
    telefone: '99999999'
}