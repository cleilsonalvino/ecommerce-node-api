import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exeption";
import { error } from "console";
import { aw } from "vitest/dist/chunks/reporters.D7Jzd9GS";

const prisma = new PrismaClient();

async  function main(){

  //criar categoria
  let categoria:Categoria;

  categoria = Categoria.criar({nome: 'mesa'})

  //salvar no banco
  await prisma.categoria.create({
    data:{
      id: categoria.id,
      nome: categoria.nome
    }
  })


  //atualizar categoria 
  const categoriaRecuperada = await prisma.categoria.update({
    where: {id: 'e4fcdb9f-4345-41f7-b630-13441bc92861'},
    data: {nome: 'banho'}
  })

  

  //listar categorias
  const ListaCategorias = await prisma.categoria.findMany();
  console.log(ListaCategorias)

}



main()
  .then(async()=>{
    await prisma.$disconnect()

  })
  .catch(async (error)=>{
    if(error instanceof DomainException){
      console.log('Execeção de Domínio');
      console.log(error.message);
    } 
    else{
      console.log('Outras Execeções');
      console.log(error.message);
    } 
    await prisma.$disconnect()
    process.exit(1)
  })