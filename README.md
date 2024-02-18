# Projeto ImHere

O ImHere é um aplicativo simples para gerenciar a lista de participantes em eventos. Com esta aplicação, você pode adicionar e remover participantes, mantendo o controle sobre quem já chegou ao evento.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) instalados em seu ambiente de desenvolvimento.

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/imhere.git
    cd imhere
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o aplicativo:**

    ```bash
    npx expo start
    ```

    Isso abrirá o Metro Bundler no seu navegador. Você pode então executar o aplicativo no seu dispositivo físico usando o aplicativo Expo Go ou em um emulador.

## Uso

Ao iniciar o aplicativo, você verá uma tela inicial com o nome do evento, a data atual formatada e um formulário para adicionar participantes. Digite o nome do participante no campo de texto e clique no botão '+' para adicioná-lo à lista.

A lista de participantes é exibida abaixo do formulário, e você pode remover um participante tocando no ícone de remoção ao lado do nome.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `src/screens/Home/index.tsx`: Contém a tela principal do aplicativo.
- `src/components/Participant.tsx`: Componente para exibir informações de participantes.
- `styles.ts`: Estilos do aplicativo.
- `package.json`: Arquivo de configuração do Node.js com as dependências do projeto.

## Dependências

- `date-fns`: Biblioteca para manipulação de datas em JavaScript/TypeScript.
- `expo`: Plataforma para criar aplicativos universais nativos para Android, iOS e web.
- `react` e `react-native`: Bibliotecas principais para o desenvolvimento de aplicativos React Native.
- `typescript`: Linguagem de programação superset de JavaScript.

Certifique-se de verificar o arquivo `package.json` para a versão específica de cada dependência.

## Contribuindo

Sinta-se à vontade para contribuir para o projeto abrindo issues ou pull requests. Qualquer contribuição é bem-vinda!

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
