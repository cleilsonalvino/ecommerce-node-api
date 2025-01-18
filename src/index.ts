import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
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
    const produtoRepo = new ProdutoPrismaRepository(prisma);

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
    //    nome:'Quarto'
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
    
    // const categoriaDeletada: boolean = await categoriaRepo.deletar("e4fcdb9f-4345-41f7-b630-13441bc92861");
    
    // console.log(categoriaDeletada);

        ////////////////////////////////
	//Recuperar Produto por UUID//
	////////////////////////////////
		
	// const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("047c0640-3814-4c44-8fb5-c02cba0334f3");

	// console.log(produtoRecuperado);

        ///////////////////
	//Inserir Produto//
	///////////////////
	/*
    const categoria01: Categoria = Categoria.recuperar({
        id: "91bb57f2-416c-4ee6-9c1e-86cb9b5c3d04",
        nome: 'mesa'
    });     

    const categoria02: Categoria = Categoria.recuperar({
        id: "4192dc8a-65fe-44e2-9576-5ce2dbe2978c",
        nome: 'Sala e Quarto'
    })

    const produto: Produto = Produto.criar({
        nome:'Toalha de Mesa',
        descricao:'toalha de algodão',
        valor:85,
        categorias:[categoria01, categoria02]
    });

	const produtoInserido = await produtoRepo.inserir(produto);

	console.log(produtoInserido);
    */

        /////////////////////////////////////////////////
	//Recuperar Todos os Produtos e Suas Categorias//
	/////////////////////////////////////////////////
		
	//const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();

	// console.log(todosProdutos);

    ///////////////////////////////////////////////
	//Atualizar Produto - Sem Atulizar Categorias//
	///////////////////////////////////////////////
/*
    const produto = {
        id: "047c0640-3814-4c44-8fb5-c02cba0334f3",
        nome: "Toalha de Mesa Grande",
        descricao: "toalha de algodão",
        valor: 85
    }; 

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);
*/

    ///////////////////
	//Deletar Produto//
	///////////////////
		
	// const produtoDeletado: boolean = await produtoRepo.deletar("047c0640-3814-4c44-8fb5-c02cba0334f3");

	// console.log(produtoDeletado);
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