export class Cliente{ //classe: molde //export para ser usado em outras files
    //atributos-propriedades
    nome;
    _cpf;   

    //como é privado, para acessar o cpf:
    get cpf(){
        return this._cpf; //se nao retornar, dá undefined
    }

    //para nao alterar o cpf
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}
