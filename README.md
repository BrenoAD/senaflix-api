# API Filme e Series - Node.Js + Express
API REST simples para gerenciar Filme e Series
 
## Pré-requisitos
- Node.js instalado
 
##   Como rodar
 
### Instalar dependências
```bash
npm i
```
 
### Iniciar  servidor
```bash
node index.js
```
 
### Acessar
Abra o nevegador em: `http://localhost:3000`
 
### Endpoints

### Filmes

| Método | Endpoint | Descrição |
|--------|----------|----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específíco |
| POST | `/filmes` | Cria um novo filme |


### Series

| Método | Endpoint | Descrição |
|--------|----------|----------|
| GET | `/series` | Lista todas as series|
| POST | `/series` | Cria uma nova serie |


## Tecnologias
- Node.js
- Express

## Notas
- Os dados são armazenados em memórias (reiniciar o servidor apaga tudo)
