"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("./modules/catalogo/domain/categoria.entity");
try {
    let categoria = categoria_entity_1.Categoria.criar({ nome: 'cama' });
    console.log(categoria);
}
catch (error) {
    console.log(error.message);
}
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
//# sourceMappingURL=index.js.map