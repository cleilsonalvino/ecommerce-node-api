import { beforeAll, describe, expect, test } from 'vitest';
import { IDEntityUUIDInvalid } from '@shared/domain/domain.exeption';
import { Categoria } from './categoria.entity';
import { NomeCategoriatamanhoMaximoInvalido, NomeCategoriatamanhoMinimoInvalido } from './categoria.exception';
import { CriarCategoriaProps, RecuperarCategoriaProps } from './categoria.types';
import {faker} from "@faker-js/faker"

let nomeCategoriaValido: string;
let nomeCategoriaTamanhoMinInvalido: string;
let nomeCategoriaTamanhoMaxInvalido: string;
let UUIDValido: string;
let UUIDInvalido: string;

beforeAll(async () => {

    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio
	nomeCategoriaValido = faker.string.alpha({length:{min:3,max:50}});
    nomeCategoriaTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:2}});
    nomeCategoriaTamanhoMaxInvalido = faker.string.alpha({length:{min:51,max:51}});
    UUIDValido = faker.string.uuid(); // Retorna um UUID v4
	UUIDInvalido = faker.string.alpha({length:{min:1,max:20}});

});

//Suite de Testes de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados
describe('Entidade de Domínio: Criar Categoria', () => {

    //Teste define um conjunto de expectativas relacionadas. 
    test('Deve Criar Uma Categoria Válida', async () => {

        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: nomeCategoriaValido
        };

        console.log(categoriaValida)

        //Quando (When) e Então (Then)
        expect(Categoria.criar(categoriaValida))
            .to.be.instanceof(Categoria);

    });

    test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'ca'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriatamanhoMinimoInvalido);

    });

    test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

        //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: '123456789123456789123456789123456789123456789123456'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriatamanhoMaximoInvalido);

    });

});

describe('Entidade de Domínio: Recupear Categoria', () => {

    test('Deve Recuperar Uma Categoria Válida', async () => {

        //Dado (Given)
        const categoriaValida: RecuperarCategoriaProps = {
            id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
            nome: 'cama'
        };

        //Quando (When) e Então (Then)
        expect(Categoria.recuperar(categoriaValida))
            .to.be.instanceof(Categoria);

    });

    test('Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalido: RecuperarCategoriaProps = {
            id: '1234',
            nome: 'cama'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaIdInvalido))
            .toThrowError(IDEntityUUIDInvalid);

    });

    test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
            id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
            nome: 'ma'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriatamanhoMinimoInvalido);

    });

    test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

        //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
            id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
            nome: '123456789123456789123456789123456789123456789123456'
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriatamanhoMaximoInvalido);

    });

});