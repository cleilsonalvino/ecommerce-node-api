"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    ///////////////
    //Gets e Sets//
    ///////////////
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value === null || value === undefined) {
            throw new Error(`${value} é nulo ou indefinido.`);
        }
        if (value.trim().length < 3) {
            throw new Error(`O nome da categoria não possui um tamanho mínimo válido.`);
        }
        if (value.trim().length > 50) {
            throw new Error(`O nome da categoria não possui um tamanho máximo válido.`);
        }
        this._nome = value;
    }
    //////////////
    //Construtor//
    //////////////
    constructor(categoria) {
        this.id = categoria.id;
        this.nome = categoria.nome;
    }
    /////////////////////////
    //Static Factory Method//
    /////////////////////////
    static criar(props) {
        let id = "12345"; //Refatorar para gerar id com UUID
        let { nome } = props;
        return new Categoria({ id, nome });
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.entity.js.map