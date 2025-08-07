# O que são Streams no Node.js?
quando lemos "Streams" a primeira coisa que vem na cabeça são os serviços de Streams como netflix e Spotify. Assistindo um filme na netflix você pode começar a assitir e visualizar mesmo que o filme não esteja totalmente carregado, streams no Node seguem a mesma lógica. entenda: 

Streams são formas eficientes de ler, escrever ou transferir dados aos poucos, em pedaços (chunks), em vez de carregar tudo de uma vez na memória.

### Tipos de Streams:
- Readable – leitura (ex: ler arquivos)

- Writable – escrita (ex: salvar em arquivo)

- Duplex – leitura e escrita (ex: sockets)

- Transform – leitura + escrita + transformação de dados (ex: compressão)

### Vantagens:
Menor uso de memória

Ideal para lidar com grandes volumes de dados

Mais performance e velocidade


# O que são Buffers no Node.js?
Buffers são uma forma de armazenar dados binários na memória, usados principalmente para manipular arquivos, streams e dados vindos da rede.
Como o Node.js lida com I/O de forma assíncrona, os buffers permitem processar partes dos dados enquanto o restante ainda está chegando.

- Exemplo prático: quando você faz upload de um arquivo, ele é carregado em partes (chunks) e armazenado em buffers antes de ser processado.

Buffers são estruturas usadas para armazenar dados binários brutos na memória, sem precisar converter para string antes. Eles são muito usados quando trabalhamos com:

- arquivos,
- streams (como uploads e downloads),
- conexões de rede,
- dados binários em geral (como imagens, áudio, etc).

### Por que usar Buffers?
O JavaScript tradicional trabalha com strings e objetos, mas o Node.js precisa lidar com dados binários de forma eficiente — e é aí que os Buffers entram!

### Exemplo prático:
```bash
js

const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello
Buffer.from() cria um buffer a partir de uma string.
```
Você pode converter de volta com .toString().

### Usado em:
- Streams (this.push(Buffer.from(...)))
- Manipulação de arquivos (fs.readFile)
- Criptografia, compressão, etc.

# O que é a Fetch API?

A Fetch API é uma funcionalidade nativa do JavaScript (em navegadores e no Node com bibliotecas) usada para fazer requisições HTTP assíncronas — como GET, POST, PUT, DELETE, etc.

Com ela, você pode buscar dados de uma API, enviar formulários, enviar JSON e muito mais.

### Exemplo básico:

```bash 
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error)); 
```

- fetch(URL) faz a requisição.

- .then(response => response.json()) converte a resposta em JSON.

- .catch() trata erros, como falha de conexão.

### Características:
Assíncrona (usa Promises).

Substitui o XMLHttpRequest.

Mais simples e moderna.

[Site de Apoio](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)


# O que é async/await?
async e await são palavras-chave do JavaScript usadas para lidar com operações assíncronas de forma mais simples e legível, substituindo o uso excessivo de .then() e .catch() com Promises.

### Como funciona?
async define que uma função retorna uma Promise.

await pausa a execução da função até que a Promise seja resolvida (ou rejeitada).

### Exemplo:
```bash
js

async function buscarDados() {
  try {
    const resposta = await fetch('https://api.exemplo.com');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Erro ao buscar:', erro);
  }
}
```

### Resumo rápido:

- async = função assíncrona
- await = espera o resultado da Promise

Mais limpo e fácil de ler do que .then().catch()

# O que é try...catch?

O try...catch é uma estrutura usada para tratar erros no JavaScript sem quebrar a execução do programa.

### Sintaxe básica:

```bash 
js

try {
  // Código que pode gerar um erro
} catch (erro) {
  // Código executado se o erro acontecer
} 
```

### Como funciona?
O bloco try tenta executar o código normalmente.

Se algo der errado (por exemplo, uma variável indefinida, erro em uma API etc), o erro é capturado no catch, onde você pode lidar com ele (exibir mensagem, registrar, corrigir, etc).

### Exemplo prático:

```bash 
js

try {
  const resultado = 10 / 0;
  console.log('Resultado:', resultado);
} catch (erro) {
  console.error('Ocorreu um erro:', erro.message);
} 
```
Mesmo que algo dê errado dentro do try, o programa não trava — ele continua rodando a partir do catch.

# O que são middlewares?
Middlewares são funções intermediárias que processam a requisição (req) e a resposta (res) em uma aplicação antes que ela chegue ao destino final (rota, controller, etc).

### Em outras palavras:
Eles funcionam como etapas no caminho de uma requisição. Cada middleware pode:

- modificar os dados da requisição ou resposta,
- interromper o fluxo (em caso de erro ou permissão negada),
- ou passar para o próximo middleware com next().

### Exemplo com Express:
```bash
js

function meuMiddleware(req, res, next) {
  console.log('Passando pelo middleware!');
  next(); // chama o próximo
}

app.use(meuMiddleware); // aplica para todas as rotas

app.get('/rota', (req, res) => {
  res.send('Chegou na rota!');
});
```

### Usos comuns:
- Autenticação e autorização
- Log de requisições
- Validação de dados
- Manipulação de erros
- CORS

### Resumo rápido:
Middleware = Função que intercepta e trata a requisição/resposta antes de chegar na rota final.

# Notas 
- .pipe() é um método usado para conectar streams no Node.js, fazendo os dados fluírem de uma fonte para um destino de forma automática e eficiente.

- Chunks são pedaços de dados enviados por uma stream aos poucos, em vez de tudo de uma vez. Isso torna o processamento mais eficiente e economiza memória.