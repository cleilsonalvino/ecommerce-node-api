"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("./modules/catalogo/domain/categoria.entity");
const domain_exception_1 = require("./shared/domain/domain.exception");
try {
    let categoria;
    categoria = categoria_entity_1.Categoria.criar({ nome: 't' });
    console.log(categoria);
}
catch (error) {
    if (error instanceof domain_exception_1.DomainException) {
        console.log(error.message);
    }
}
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção ');
}
//# sourceMappingURL=index.js.map