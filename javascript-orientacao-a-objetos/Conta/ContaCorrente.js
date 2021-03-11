//import {Cliente} from "./Cliente.js" //nao esquecer de dar import, porque usa o Cliente em instanceof
import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{ //usa o que tem na classe Conta
    //separando atributos publicos dos privados
    static numeroDeContas = 0; //para mudar em todas as contas, ao inves de ser 1 para cada conta
    // agencia; 
    // _cliente;

    // set cliente(novoValor){ //para atribuir valor ao cliente, sem precisar "criar" novo objeto, acessa propriedades privadas
    //     if(novoValor instanceof Cliente){
    //         this._cliente = novoValor;
    //     }        
    // }

    // get cliente(){
    //     return this._cliente;
    // }

    // #saldo = 0; //# para tornar privado, ou _saldo (convencao da comunidade)

    // get saldo(){ //diferente do set, que é de atribuição
    //     this.#saldo;
    // }

    // constructor(cliente, agencia){
    //     this.agencia = agencia;
    //     this.cliente = cliente;
    //     //this.numeroDeContas += 1; nao é this porque nao se refere à conta a qual estou trabalhando
    //     ContaCorrente.numeroDeContas +=1; //porque é static
    // }

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){ //essa função sobrescreve o que está na classe Conta
        //escopo da funcao
        let taxa = 1.1;        
        return this._sacar(valor, taxa); //ou super._sacar()
    }
}
