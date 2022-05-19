# Projeto DH PetShop - API

Desenvolvimento de uma API no padrão RESTFull com autenticação por JWT que realizar um CRUD e valida os dados passados do front-end.
O Projeto foi feito utilizando as seguintes tecnologias: NodeJS, Sequelize, Express, MySQL

Este é um projeto de conclusão do curso de Desenvolvedor Fullstack NodeJs através da Escola Digital House

## Requisitos de Instalação

Para rodar o projeto é necessário rodar um banco MySQL
Baixar o projeto atraves do git clone
Realizar a instalação dos pacotes, através do comando `npm i (npm install)`
Renomear o arquivo de ambiente `.env.example` para `.env` que se encontra na raiz do projeto que contem as váriaveis de ambiente utilizadas no projeto. Mas lembre-se: utilize-as **apenas** para teste.

## Inicialização do projeto
Para inicialização da API, execute a seguinte os seguintes comandos abaixo, na ordem que são apresentados:

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Estes comandos irão: `criar a base de dados, gerar as tabelas e popular o banco de dados`

Por fim inicialize o projeto atraves do comando npm run dev.
Caso verifique no console: http:localhost:undefined, verifique no arquivo de ambiente (.env) a variavel PORT.

## Middleware
Dentro da pasta middleware encontra-se o arquivo `loginValidation`, que é responsavel por autorizar o acesso a determinada rota se, somente se estiver autenticado (com token JWT gerado), usuários validados atraves deste middleware estarão aptos a criar os pets para somente seu propio usuário, evitando um usuário criar pet no login de outro.

## Rotas
O projeto possui as seguintes rotas:
`castracao, raca, tipo, genero, peso, pet, usuario, token, foto, servicos e parceiros`
- Todas as rotas acima **EXCETO** `token` utilizam os Verbos HTTP: Create , Show, Update , Delete e estão disponiveis através das subrotas: /add, /, /upd, /del

## Funcionamento da Aplicação:
As caracteristicas do pet , tais como (castracao, raca, tipo, genero, peso) devem ser pre-cadastradas no dashboard (front-end) do administrador e/ou da sua ferramenta de API REST preferida.

## Dúvidas
Qualquer dúvida/problema referente ao projeto, sinta-se livre para abrir uma issue no projeto que eu vou responder assim que possível.