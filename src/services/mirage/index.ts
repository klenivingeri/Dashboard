import { createServer, Model} from 'miragejs'; //1

 type User = { //4
    name: String;
    email: String;
    created_at:String;
};

export function makeServer() {
    const server = createServer({
        models: {//2
            user: Model.extend<Partial<User>>({})
        },

        routes(){ //3
            this.namespace = 'api'; //3.1
            this.timing = 750; // simula a busca no servido, para testar delay, carregamentos spiners 
            this.get('/users'); //3.2
            this.post('/users'); //3.3

            this.namespace = ''; //3.4
            this.passthrough() //3.5
        }

    })

    return server;

}











/**
 
Esse é o primeiro arquivo depois de instalar a lib do mirage, criamos a pasta services/mirage/index.js

1 - Importamos a lib

2 - Formato dos nossos dados/ como se fosse as linhas da tabela

3 - routes / router handlers
3.1 - Informa que para acessar precisamos colocar /api/users
3.2 - Shorthands, o Mirage entender que tem que devolver todos os dados
3.3 - Cria a estrutura nessesaria para inserir sem eu precisar fazer qualque coisa
      passando os campo, ele cria um usuario no banco de form automatizadaa
3.4 - Caso tenha uma rota de API dentro da file pages, resetando ele com '' não prejudica o fluxo
3.5 - São obrigadas a passar pela API do mirage, e caso não encontre nada, ele envia para o fluxo normal
      de API dentro da file pages
4 - Serve como a tabela de usuario




Palavras chave ----------------------
Partial : Hack as vezes queremos passar algo, sem informar todos os campos
Ex: em vez de passar 3, passamos 2 campos
Tem na documentação do Mirage

CRUD Padrão : Insert, update, Delete










Nosso server vai receber createServer({config}), e vamos passar para ela nossa configuração
temos que passar as rotas, e qual tipo de dados.

models:{
    user: Model.extend({}) ** como se fosse uma tabela
}  ** qual tipo de dados que vamos passar

router(){} ** quais as rotas que vamos ter no nosso server



 */