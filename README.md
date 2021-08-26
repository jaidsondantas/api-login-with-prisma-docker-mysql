## Description | Descrição

This is an example of an api made in nodeJS with the help of the framework called NESTJS,
can basically be used to alternate users and return a token
JWT.

Este é um exemplo de api feita em nodeJS com ajuda do framework chamado NESTJS,
basicamente pode ser ultilizada para altenticar usuários e retornar um token 
JWT.

## Installation | Instalação

### If there is no mysql installed | Caso não haja mysql instalado

```bash
$ docker-compose up -d mysql
```

### If you have installed Mysql|  Caso tenha instalado Mysql
Passe as configurações de acesso para o seguintes arquivos 

    .env
    src/database/config-database.ts
    src/ormconfig.json

###Continue installation normally | Continue a instalação normalmente
```bash
$ npm install
$ npm run mds
$ npm run dev
```



## Dados de acesso
Migration will create in its database three tables, and will create a default user.

A Migração criará em sua base de dados três tabelas, e criará um usuário padrão.


```bash
user: usuarioteste@gmail.com
pass: 123
```

The api Documentation will be available at the following url

A Documentação da api estará disponível na seguinte url

    http://localhost:4000/api

## License

Nest is [MIT licensed](LICENSE).
