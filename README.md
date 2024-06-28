# Fernando.io

## Informações para criação da imagem

### Imagem base: node:20.12.2-alpine3.19

### Comando para configurar a aplicação
```shell
npm i -g @ionic/cli && \
    npm i -D -E -g @angular/cli && \
    npm i --save-dev @angular-devkit/build-angular
```

### Regras

- [ ] Criar imagem com multistage build
- [ ] Usar o usuario Node
- [ ] Espelhar volumes com o local sem dar problema
- [ ] Usar Docker-compose