//arquivo so com a execucao
import {Cliente} from "./Cliente.js" //importando do arquivo da classe Cliente
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionários/Gerente.js";
import {Diretor} from "./Funcionários/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente2 = new Cliente(); //criando objeto, criando instancia

// const cliente1Nome = "Ricardo";
// const cliente1CPF = 11122233309;
// const cliente1Agencia = 1001; 
// const cliente1Saldo = 0;

//com a mudança para o construtor não precisa dessa parte
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

//fica então:
const cliente1 = new Cliente("Ricardo", 11122233309);

// const cliente2Nome = "Alice";
// const cliene2CPF = 88822233309;
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;

// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
//depois que usa o construtor em contacorrente, não precisa mais disso
// contaCorrenteRicardo.saldo = 0;
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;

//const conta2 = new ContaCorrente(cliente2, 102);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);

//polimorfismo: diferentes classes sendo tratadas da mesma forma
const diretor = new Diretor("Rodrigo", 10000, 12334567890);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 22211133344465);
const cliente = new Cliente("Priscila", 78912345609, "456");

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);

//polimorfismo: tratar objetos diferentes de maneiras semelhantes