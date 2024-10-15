# node_api_seguranca
API em Node.js para aplicação dos conceitos de segurança, autenticação e autorização


## Temas abordados

* Criptografar senhas para aumentar a segurança dos dados do usuário no banco de dados;
* Usar hash uuid para aumentar a segurança dos registro no banco de dados e impedir que pessoas maliciosas não tenham acesso a quantidade de registros do banco de dados;
* Criar sistema de login utilizando token JWT para adicionar segurança as rotas da API;
* Criar middleware para verificar se usuários estão autenticados na API;
* Armazenar informações do usuário nos dados da requisição para utilizar dentro das controllers e services;
* Criar hash únicos para serem utilizados na geração de token JWT.
* Criar CRUD de perfis de usuário (Roles) para definir quais os tipos de usuários vamos ter na API;
* Criar CRUD de permissões para definir quais as permissões os usuários, ou perfis de usuário, irão ter na API;
* Criar referência entre tabelas no banco de dados para saber quais são as primaryKey e foreignKey das tabelas;
* Fazer o relacionamento entre tabelas no banco de dados para saber como os cadastros dos registros vão se comportar.
* Cadastrar perfis e permissões em usuários para diferenciar o acesso de acordo com os níveis hierárquicos dentro da API;
* Cadastrar permissões nos perfis, diferenciando as permissões para cada tipo de funcionário que irá acessar a API
* Utilizar funções alias do Sequelize para facilitar as ações entre tabelas relacionadas.
