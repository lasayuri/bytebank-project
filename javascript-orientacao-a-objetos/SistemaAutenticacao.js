//ser autenticavel é ter o método autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.eAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        
        return false;
    }

    //ducky type: comum de linguagens fracamente tipadas. Não interessa se ele é um pato, mas sim se ele age como um pato
    static eAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}