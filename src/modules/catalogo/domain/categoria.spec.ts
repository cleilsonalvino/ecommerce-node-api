import { describe, expect, test } from "vitest";
import { CriarCategoriaProps } from "./categoria.types";
import { Categoria } from "./categoria.entity";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception";

//suite de testes de unidade - entidade de domínio
//Usando a descricao, voce pode definir como um conjunto de testes ou benchmarks relacionados

describe('Entidade de Domínio: ', ()=>{

    //Teste define um conjunto de expectativas relacionadas
    test('Deve criar uma categoria válida', async ()=>{

        //Dado uma categoria válida

        const categoriaValida: CriarCategoriaProps = {
            nome: 'cama'
        };

        //Quando (when) e entao (then)

        expect(Categoria.criar(categoriaValida)).to.be.instanceof(Categoria);

    });

    test('Não deve criar uma categoria inválida(tamanho minimo)', async ()=>{

        //Dado uma categoria inválida (tamanho minimo)

        const categoriaNomeInvalida: CriarCategoriaProps = {
            nome: 'ca'
        };

        //Quando (when) e entao (then)

        expect(() => Categoria.criar(categoriaNomeInvalida)).toThrowError(NomeCategoriaTamanhoMinimoInvalido);

    });

    test('Não deve criar uma categoria inválida(tamanho maximo)', async ()=>{

        //Dado uma categoria inválida (tamanho minimo)

        const categoriaNomeInvalida: CriarCategoriaProps = {
            nome: 'casdfgsfhgsadghsthrtsehfdghdfghgfhdfxghdfghdfghfdhfdghfdghfdghfhsghjsfghtgjhy'
        };

        //Quando (when) e entao (then)

        expect(() => Categoria.criar(categoriaNomeInvalida)).toThrowError(NomeCategoriaTamanhoMaximoInvalido);

    });

});