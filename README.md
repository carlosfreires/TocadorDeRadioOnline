# RepRadioOnline (Tocador de Radio Online)

Este projeto é um **tocador de rádio online**, desenvolvido com o framework [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2., que permite a reprodução de links de áudio de rádios online ou de outras fontes no mesmo formato.
O layout do projeto homenageia a **astronomia** e a **ufologia**, com uma réplica animada do sistema solar e uma nave espacial no ponteiro do mouse.

## Funcionalidades

- Reproduz links de áudio de rádios online.
- Layout temático inspirado no sistema solar e na ufologia.
- Nave de ET animada no ponteiro do mouse.

## Instruções de Desenvolvimento

### Pré-requisitos

Para rodar o projeto localmente, é necessário ter o **Node.js** e o **Angular CLI** instalados. Caso não tenha o Angular CLI, instale com o seguinte comando:

```bash
npm install -g @angular/cli
```

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, utilize o comando:

```bash
ng serve
```
Isso iniciará o servidor na URL [http://localhost:4200/](http://localhost:4200/), e a aplicação será recarregada automaticamente sempre que houver alterações nos arquivos de código.

### Construção do Projeto

Para gerar a versão de produção do projeto, execute o comando:
```bash
ng build --prod
```
Esse comando compilará o projeto e armazenará os artefatos de build na pasta dist/, otimizando a aplicação para melhor performance.

### Testes Unitários
Para rodar os testes unitários com o Karma, use:

```bash
ng test
```
### Testes End-to-End (E2E)
Para realizar testes end-to-end, execute o comando:
```bash
ng e2e
```
### Gerenciamento de Componentes
Caso queira gerar novos componentes, execute:
```bash
ng generate component nome-do-componente
```
Para mais informações sobre o Angular CLI e seus comandos, acesse a [Documentação do Angular CLI](https://angular.dev/tools/cli).

### Licença

Este projeto está licenciado sob a Licença MIT.
