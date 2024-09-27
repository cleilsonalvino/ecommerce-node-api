"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const categoria_exception_1 = require("./categoria.exception");
class Categoria {
    //Gets e Sets
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
            throw new categoria_exception_1.NomeCategoriaNuloOuIndefinido;
        }
        if (value.trim().length < 3) {
            throw new categoria_exception_1.NomeCategoriaTamanhoMinimoInvalido;
        }
        if (value.trim().length > 50) {
            throw new categoria_exception_1.NomeCategoriaTamanhoMaximoInvalido;
        }
        this._nome = value.trim();
    }
    //Construtor
    constructor(categoria) {
        this._id = categoria.id;
        this.nome = categoria.nome;
    }
    //Static Factory Method
    static criar(props) {
        let id = "12345"; //refatorar para gerar automatico futuramente
        let { nome } = props;
        return new Categoria({ id, nome });
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.entity.js.map