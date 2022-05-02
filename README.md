# Site do Projeto de Robótica do IFNMG - Campus Salinas

Desenvolver um site intuitivo com o propósito de divulgar o Projeto de Robótica do IF Campus Salinas.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

```
VS Code (ou outro editor de prefêrencia).
Os demais requisitos serão instalados na sequência. 
```

### 🔧 Instalação
Preparando o projeto para rodar no Front-End
* Instalar as dependências
```
npm install
```

* Criar o arquivo package.json
```
npm init
```

* Instalar o React e o Next.js
```
npm install next react react-dom
```

```
Abra package.json e adicione o seguinte scripts:
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
* Para rodar o projeto em localhost 
```
npm run dev
```

* Instalar o Bootstrap
```
npm install --save bootstrap
```

* Instalar a biblioteca para gerenciar o Bootstrap. [https://reactstrap.github.io/](https://reactstrap.github.io/) 
```
npm install --save reactstrap
```

* Instalar a biblioteca para inserir o CSS diretamente no HTML. [https://github.com/zeit/next-plugins/tree/master/packages/next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css) 
```
npm install --save @zeit/next-css
```

* Instalar a biblioteca de ícone
```
npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

* Realizar conexão com a API
```
npm install --save axios
```

* Cada página do site, será criada na pasta pages:
![Páginas do Site](https://user-images.githubusercontent.com/89039535/166301252-e3992ebd-1be7-4b8f-9884-49e430b75c22.png)

### Preparando o projeto para rodar no Back-End

* Instalar todas as dependencias indicada pelo package.json
```
npm install
```

* Rodar o projeto usando o nodemon 
```
nodemon app.js
```

* Criar o arquivo package
```
npm init
```

* Gerencia as requisições, rotas e URLs, entre outra funcionalidades
```
npm install express
```

* Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
```
npm install -g nodemon
```

* Rodar o projeto usando o nodemon 
```
nodemon app.js
```

* Instalar o MongoDB
```
npm install --save mongodb
```

* Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
```
npm install --save mongoose
```
* Permitir acesso a API
```
npm install --save cors
```

* Gerar o backup do banco de dados MongoDB
```
mongodump --db 'nome do backup' --out C:\data\db
```

* Restaurar o backup do banco de dados MongoDB
```
mongorestore --db 'nome do backup' 'local do backup'
```

## 🛠️ Construído com

* [Next.JS](https://nextjs.org/docs/getting-started) - Framework Web
* [Reacstrap](https://reactstrap.github.io/) - Biblioteca de componentes React para Bootstrap
* [NextCSS](https://github.com/zeit/next-plugins/tree/master/packages/next-css) - Biblioteca para inserir o CSS diretamente no HTML
* [MongoDB](https://www.mongodb.com/docs/) - Banco de Dados
* [mongoose](https://mongoosejs.com/docs/guide.html) - Traduz o Banco de Dados para JS
* [Insomnia](https://docs.insomnia.rest/) - Programa para testar API REST

## ✒️ Autores

* **Yan Silveira** - *Front-End* - [yansilveira00](https://github.com/yansilveira00)
* **Rafael Henrique** - *Back-End* - [rhams1997](https://github.com/rhams1997)
* **Luis Gustavo** - *Front-End* - [Phelps671](https://github.com/Phelps671)
