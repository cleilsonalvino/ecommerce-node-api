import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types";
import { DomainException } from "./shared/domain/domain.exeption";

try {

    //criar categoria
    let categoria: Categoria;
    categoria = Categoria.criar({nome:'cama'});
    console.log(categoria);

    //recuperar categoria

    let propsCategoria: RecuperarCategoriaProps = {
        id: '123',
        nome: 'Mesa'
    }
    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);
} 
catch (error:any) {
    if(error instanceof DomainException){
        console.log(error.message)
    } else{
        console.log(error.message);
    }
    
}
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}
