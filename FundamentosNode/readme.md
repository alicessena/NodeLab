## Metódos

GET => Busca um recurso do back-end
POST => Criar um recurso no back-end
PUT => Atualizar, editar (Por completo) um recurso no back-end
PATCH => Atualizar uma informação específica de um recurso no back-end
DELETE => Deletar um recurso no back-end

## HTTP 

- metódo HTTP
- URL 

exemplos: 

GET localhost:3333/users => sendo "GET" o método HTTP e "Users" a URL do que queremos *buscar*
DELETE localhost:3333/users => sendo "DELETE" o método HTTP e "Users" a URL do que queremos *deletar*

## Diferença entre stateful e stateless:

- Stateful (com estado)
A aplicação mantém informações sobre interações anteriores.
→ Ex: Um carrinho de compras que "lembra" os itens adicionados pelo usuário.

- Stateless (sem estado)
A aplicação não armazena informações entre requisições.
→ Ex: Uma API REST que trata cada requisição de forma independente, como se fosse a primeira vez.

## Códigos de status de respostas HTTP

- Respostas Informativas (100 – 199)
- Respostas bem-sucedidas (200 – 299)
- Mensagens de redirecionamento (300 – 399)
- Respostas de erro do cliente (400 – 499)
- Respostas de erro do servidor (500 – 599)

[Site de Referência](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status)

## req e res no Node.js

- req (request) → Representa a requisição feita pelo cliente (navegador, app etc).
Contém dados como: URL, parâmetros, corpo (body), cabeçalhos (headers), etc.

- res (response) → Representa a resposta que o servidor vai enviar de volta para o cliente.
É com res que você envia dados, HTML, JSON, status HTTP e mais.