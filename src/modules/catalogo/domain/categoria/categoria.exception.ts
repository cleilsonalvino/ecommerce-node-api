import { DomainException } from "@shared/domain/domain.exeption";

class CategoriaException extends DomainException{
    constructor(message:string = 'Exceção de Domínio genérica da entidade Categoria'){
        super(message);
        this.name = 'CategoriaException';
        this.message = message;
    }
}

class CategoriaNuloOuIndefinido extends CategoriaException {
    constructor(message:string = 'Nome da categoria é nulo ou indefinido'){
        super(message);
        this.name = 'CategoriaNuloOuIndefinido';
        this.message = message;
    }
}

class NomeCategoriatamanhoMinimoInvalido extends CategoriaException {
    constructor(message:string = 'O Nome da categoria não possui o tamanho mínimo válido'){
        super(message);
        this.name = 'NomeCategoriatamanhoMinimoInvalido';
        this.message = message;
    }
} 

class NomeCategoriatamanhoMaximoInvalido extends CategoriaException {
    constructor(message:string = 'Nome da categoria não possui o tamanho máximo válido'){
        super(message);
        this.name = 'NomeCategoriatamanhoMaximoInvalido';
        this.message = message;
    }
}

export {
    CategoriaException,
    CategoriaNuloOuIndefinido,
    NomeCategoriatamanhoMaximoInvalido,
    NomeCategoriatamanhoMinimoInvalido
}