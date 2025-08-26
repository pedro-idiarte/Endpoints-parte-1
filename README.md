# Endpoints - Parte 1
## Introdução

Neste exercício, você vai praticar a criação de rotas HTTP utilizando o Express para implementar um CRUD completo (Create, Read, Update, Delete) para o recurso "usuário".
O projeto já vem com um “banco de dados” no arquivo client/db.ts, que fornece 5 funções prontas para manipulação de dados.
Seu objetivo será criar 5 endpoints que utilizem essas funções para gerenciar usuários.

## Objetivo
Criar 5 endpoints para o recurso "usuário", utilizando as funções disponibilizadas em client/db.ts. O recurso usuário deve ter as seguintes propriedades:
{ 
    name: “fulano de tal”, 
    email: “fulano@teste.com”, 
    password: “123456” 
}


## Passos para rodar a aplicação

1 - No terminal entre na pasta do projeto:

```bash
cd ensinando-endpoints
```

2 - Instale as dependências

```bash
npm install
```

3 - Inicie a aplicação

```bash
npm start
```

## Documentação

No arquivo `client/db.ts` temos uma simulação de **framework** que nos ajuda a enviar e receber informações para um banco de dados. **Vocês não precisam entender os detalhes da implementação desse arquivo**, porém devem entender o que eles nos fornece para que consigamos trabalhar.

São 5 operações que podemos utilizar a partir da importação deste arquivo e são elas:

- findAll - **nos retorna todas as ocorrências dentro de do banco**
- findById - **nos retorna apenas uma ocorrência no banco de acordo com o ID**
- create - **cria uma nova ocorrência no banco de dados**
- removeById - **remove uma ocorrência de acordo com o id**
- updateById - **atualiza uma ocorrência de acordo com o id**

## Como utilizar

Importando o db:
Primeiro certifique-se de estar importando o arquivo `client/db.ts` no início do arquivo que você pretende trabalhar.

```typescript
import db from './client/db';
```
Exemplos de uso:
Para receber todos os elementos existentes no banco você pode utilizar a função `findAll`

```typescript
const items = db.findAll()
console.log(items)
```

Para receber apenas um elemento de acordo com o seu `ID` você pode utilizar a função `findById`

```typescript
const id = 1
const item = db.findById(id)
console.log(item)
```

Para criar um novo elemento no banco você pode utilizar a função `create`

```typescript
const user = {
    id: 1,
    name: "Joana",
    email: "j.ana@gmail.com",
    password: "abc.123#"
}
const createdItem = db.create(user)
console.log(createdItem)
```

Para atualizar um determinado elemento por `ID` você pode utilizar a função `updateById`

```typescript
const id = 1
const user = {
    id = id,
    name: "Joana Maria",
    email: "jmaria@gmail.com",
    password: "123#abc"
}
const updatedItem = db.updatedById(id, user)
console.log(updatedItem)
```

Para remover um elemento de acordo com o seu `ID` você pode utilizar a função `removeById`

```typescript
const id = 1
const removedItem = db.removeById(id)
console.log(removedItem)
```

Criando as Rotas:
Cada função deve ser associada a uma rota com:
Caminho (ex: "/usuarios")
Método HTTP (GET, POST, PUT, DELETE)

- Exemplo de rota inicial:


```typescript
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

- Outro exemplo de rota. Para cada função você precisa criar uma rota com nome ("/rota") e método de requisição http (get, delete, etc):

```typescript
  app.get("/", (req, res) => {
    const acharTodosUsuarios = todosUsuarios()

    res.send(acharTodosUsuarios)
  });
```