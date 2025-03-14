# Documentação - Teste Prático Front-end BeTalent

## Visão Geral

Este projeto tem como objetivo construir uma interface responsiva que exiba uma tabela de colaboradores, consumindo dados de uma API simulada utilizando `json-server`. O projeto foi desenvolvido em React.js com o uso da biblioteca Axios para requisições HTTP.

## Tecnologias Utilizadas

-   React.js
-   TypeScript
-   Axios
-   json-server
-   Node.js
-   Npm
-   Git

## Funcionalidades Implementadas

### 1. Exibição da Tabela de Colaboradores

A tabela de colaboradores segue o layout do [Figma](https://www.figma.com/design/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Frontend-BeTalent?node-id=0-1&p=f&t=TCsnivODYEsFa2J2-0) e contém as seguintes colunas:

-   **Imagem** (thumb do/a usuário/a)
-   **Nome**
-   **Cargo**
-   **Data de Admissão** (formatada para um padrão legível)
-   **Telefone** (com aplicação de máscara de formatação)

### 2. Pesquisa Dinâmica

Foi implementado um campo de pesquisa que permite filtrar os colaboradores por:

-   Nome
-   Cargo
-   Telefone

### 3. Componentização

O projeto foi estruturado com componentes reutilizáveis para melhor manutenção e escalabilidade:

-   **EmployeeFilter**: Responsável por renderizar a lista de colaboradores.
-   **TableHeader**: Representa o cabeçalho da tabela.
-   **Header**: Contém o título da página.
-   **SearchBar**: Campo de pesquisa interativo.

### 4. Consumo da API Simulada

Os dados dos colaboradores foram consumidos a partir de um `json-server`, utilizando a biblioteca Axios para facilitar a requisição HTTP e o tratamento de dados.

### 5. Formatação de Dados

-   **Datas**: Convertidas para um formato padronizado antes da exibição na tabela.
-   **Telefones**: Aplicada uma máscara de formatação para padronizar a exibição dos números.

## Como Rodar o Projeto

1. Clone o repositório:
    ```sh
    git clone <https://github.com/lucassilveira1/colabview.git>
    cd colabview
    ```
2. Instale as dependências:
    ```sh
    npm install
    ```
    ou
    ```sh
    yarn install
    ```
3. Inicie o `json-server` para a API simulada:
    ```sh
    npx json-server --watch db.json
    ```
    ou
    ```sh
    yarn json-server --watch db.json
    ```
4. Inicie o projeto:
    ```sh
    npm run dev
    ```
    ou
    ```sh
    yarn dev
    ```

## Considerações Finais

O projeto segue as boas práticas de desenvolvimento front-end, com separação de responsabilidades e componentes reutilizáveis. A implementação do filtro torna a experiência do usuário mais dinâmica e eficiente. Além disso, a formatação de dados no front-end melhora a usabilidade e legibilidade das informações apresentadas.
