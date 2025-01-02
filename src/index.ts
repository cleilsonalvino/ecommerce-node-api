import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { PrismaClient } from '@prisma/client';
import { DomainException } from '@shared/domain/domain.exeption';

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {
    
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);

    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////
    
    // const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("91bb57f2-416c-4ee6-9c1e-86cb9b5c3d04");

    // console.log(categoriaRecuperada);

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////
    
    // const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();

    // console.log(todasCategorias);

    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////
    
    // const existeCategoria: boolean = await categoriaRepo.existe("91bb57f2-416c-4ee6-9c1e-86cb9b5c3d04");

    // console.log(existeCategoria);

    /////////////////////
    //Inserir Categoria//
    /////////////////////
    
    // const categoria: Categoria = Categoria.criar({
    //    nome:'Sala e Quarto'
    // });     

    // const categoriaInserida = await categoriaRepo.inserir(categoria);

    // console.log(categoriaInserida);

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////
    
    // const categoria: Categoria = Categoria.recuperar({
    //    id: "e4fcdb9f-4345-41f7-b630-13441bc92861",
    //    nome: "Banho"
    // });     

    // const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);

    // console.log(atualizouCategoria)

    /////////////////////
    //Deletar Categoria//
    /////////////////////
    
    const categoriaDeletada: boolean = await categoriaRepo.deletar("e4fcdb9f-4345-41f7-b630-13441bc92861");
    
    console.log(categoriaDeletada);

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
       if (error instanceof DomainException) {
           console.log('Execeção de Dóminio');
           console.log(error.message);
       }
       else {
           console.log('Outras Exceções');
           console.log(error.message);
       }
       await prisma.$disconnect()
       process.exit(1)
   })