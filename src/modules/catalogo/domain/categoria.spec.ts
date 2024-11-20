import { escape } from "querystring";
import { Categoria } from "./categoria.entity";
import { NomeCategoriatamanhoMaximoInvalido, NomeCategoriatamanhoMinimoInvalido } from "./categoria.exception";
import { CriarCategoriaProps } from "./categoria.types";
import { describe, expect, test } from "vitest";

//Suite de testes de unidade

describe('Entidade de Domínio: Categoria', ()=>{

    
    test('Deve criar uma categoria válida', async ()=>{
        //categoria válida

        const categoriaValida: CriarCategoriaProps = {
            nome: 'cama'
        };

        //Quando

        expect(Categoria.criar(categoriaValida)).to.be.instanceOf(Categoria)
    });

    test('Categoria com nome inválido(Tamanho mínimo)', async ()=>{
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'ca'
        }

        expect(() => Categoria.criar(categoriaNomeInvalido)).toThrowError(NomeCategoriatamanhoMinimoInvalido)
    })
    test('Categoria com nome inválido(Tamanho máximo)', async ()=>{
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome:'fhkjashfsdfhajkhsfjhasjhfaskdfjhasjdfhakjsdhffasdjhfkjasdhf'
        }

        expect(() => Categoria.criar(categoriaNomeInvalido)).toThrowError(NomeCategoriatamanhoMaximoInvalido)
    })
})