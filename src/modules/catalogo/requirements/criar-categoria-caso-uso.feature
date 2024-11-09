Feature: Criar categoria
    Como um <administrador>
    Eu quero <Criar uma categoria>
    De modo que <Os produtos possam ser associados a uma ou mais categorias facilitando a organização e busca dos produtos>

Scenario: Categoria válida (padrão)
    Dado (Given) [Categoria válida]
    Quando (When) [Solicitar a Criação de uma nova Categoria]
    Então (Then) [A categoria deve ser criada corretamente]

Scenario: Categoria inválida - Nome da categoria é nulo ou indefinido
    Dado (Given) [Uma categoria com nome nulo ou indefinido]
    Quando (When) [Solicitar a Criação de uma nova Categoria]
    Então (Then) [Um erro informando que o nome da categoria é nulo ou indefinido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho mínimo (Execeção)
    Dado (Given) [Uma Categoria com nome que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Criação de uma Categoria]
    Então(Then) [Um erro informando que o nome da categoria não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho máximo (Execeção)
    Dado (Given) [Uma Categoria com nome que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Criação de uma Categoria]
    Então(Then) [Um erro informando que o nome da categoria não possui um tamanho máximo válido deve ser apresentado]