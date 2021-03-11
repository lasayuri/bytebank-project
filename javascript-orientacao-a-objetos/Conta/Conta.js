//classe abstrata -> não pode ser instanciada, só pode ser herdada
export class Conta{
    //quando monta uma classe sem construtor, é criado um construtor implicito por default sem nada
    constructor(saldoInicial, cliente, agencia){
        //criando novo erro, ele realmente para o código
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        //escopo da funcao
        //let taxa = 1;
        //return this._sacar(valor, taxa);        
        //está comentado porque é um método abstrato, feito apenas para ser sobrescrito

        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){ //privado
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //this.saldo porque se refere a conta corrente que estamos lidando no momento, ao inves de usar contaCorrenteRicardo e etc
            this._saldo -= valorSacado;
            return valorSacado; //se nao der return, acaba dando undefined
        }
    }

    depositar(valor){
        // if(valor <= 0){
        //     return; //sai da funcao, ja que e um valor que nao queremos e coloca-se o this.saldo += valor no final, fora da identacao
        // }

        //ou
        // if(valor <= 0) return; os dois sao early return

        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}