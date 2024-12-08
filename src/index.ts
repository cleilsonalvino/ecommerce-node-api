import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { RecuperarCategoriaProps } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/mappers/categoria.map";
import { DomainException } from "@shared/domain/domain.exeption";
import { readFile, writeFile } from "fs";

try {
  //criar categoria
  let categoria: Categoria;
  categoria = Categoria.criar({ nome: "cama" });
  console.log(categoria);
  console.log(JSON.stringify(categoria));
  console.log(JSON.parse(JSON.stringify(categoria)));

  //recuperar categoria

  let propsCategoria: RecuperarCategoriaProps = {
    id: "f5a1a181-6fda-4ce9-834c-59516c427f54",
    nome: "Mesa",
  };
  let categoria2: Categoria = Categoria.recuperar(propsCategoria);
  console.log(categoria2);

  //Persistindo dados - file system

  let arrayCategorias = []
  arrayCategorias.push(categoria.toDTO());
  arrayCategorias.push(categoria2.toDTO());

  writeFile('categorias.json', JSON.stringify(arrayCategorias), function (error:any) {
    if (error) throw error;
    console.log('Arquivo Salvo com Sucesso!');
    readFile('categorias.json', (error, dadoGravadoArquivo) => {
        if (error) throw error;
        console.log('Leitura de Arquivo!');
        let categoriasSalvas: [] = JSON.parse(dadoGravadoArquivo.toString());
        categoriasSalvas.forEach(categoriaJSON => {
            console.log(categoriaJSON);
            console.log(CategoriaMap.toDomain(categoriaJSON));
        })
    });
});

} catch (error: any) {
  if (error instanceof DomainException) {
    console.log("Exceção de Domínio");
    console.log(error.message);
  } else {
    console.log("Outras Exceções");
    console.log(error.message);
  }
} finally {
  console.log(
    "Ação que deve ser executada em caso de sucesso e em caso de exceção"
  );
}
