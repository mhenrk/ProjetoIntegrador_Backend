# Projeto DH PetShop - API

Desenvolvimento de uma API no padrão RESTFull com autenticação por JWT que realizar um CRUD e valida os dados passados do front-end.
O Projeto foi feito utilizando as seguintes tecnologias: NodeJS, Sequelize, Express, MySQL

Este é um projeto de conclusão do curso de Desenvolvedor Fullstack NodeJs através da Escola Digital House

## Requisitos de Instalação

Para inicializar o projeto **UTILIZE DOCKER**

Faça um clone do repositório utilizando `git clone`
Renomeie o arquivo de ambiente `.env.example` para `.env` que se encontra na raiz do projeto que contem as váriaveis de ambiente utilizadas no projeto. Mas lembre-se: utilize-as **APENAS** para teste.

O arquivo P `.env.example` já contem algumas chaves padronizadas

**ATENÇÃO** com a variavel `DB_HOST` ela está diretamente associada ao nome do host no arquivo `docker-compose.yml`

## Inicialização do projeto
Para iniciar o projeto, verifique se o docker está devidamente inicializado.
Acesse a pasta do projeto e rode o comando `docker-compose up` 

Aguarde a finalização. O projeto já está operacional

## Middleware
Dentro da pasta middleware encontra-se o arquivo `loginValidation`, que é responsavel por autorizar o acesso a determinada rota se o usuário estiver autenticado (com token JWT gerado), usuários validados atraves deste middleware estarão aptos a criar os pets em seu perfil automaticamente

## Rotas
O projeto possui as seguintes rotas:
`castracao, raca, tipo, genero, peso, pet, usuario, token, foto, servicos e parceiros`
- Todas as rotas acima **EXCETO** `token` utilizam os Verbos HTTP: Create , Show, Update , Delete e estão disponiveis através das subrotas: /add, /, /upd, /del

## Funcionamento da Aplicação:
As caracteristicas do pet , tais como (castracao, raca, tipo, genero, peso) devem ser pre-cadastradas no dashboard (front-end) do administrador e/ou da sua ferramenta de API REST preferida.

## Dúvidas
Qualquer dúvida/problema referente ao projeto, sinta-se livre para abrir uma issue no projeto que eu vou responder assim que possível.