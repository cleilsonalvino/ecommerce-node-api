import { ICategoria, CriarCategoriaProps } from "./categoria.types";

class Categoria implements ICategoria{

    ///Classes

    private _id: string
    private _nome: string

    //gets e sets

    public get id(): string{
        return this._id;
    }

    public set id(value: string){
        this._id = value;
    }
    
    public get nome(){
        return this._nome;
    }

    public set nome(value: string){
        console.log('------------------')
        if(value === null || value === undefined){
            throw Error('Nome da categoria nulo ou indefinido')
        }

        if(value.trim().length < 3){
            throw Error('Nome da categoria não possui o tamanho mínimo válido')
        }
        if(value.trim().length > 50){
            throw Error('Nome da categoria não possui o tamanho máximo válido')
        }

        this._nome = value
    }

    //construtor

    private constructor(categoria: ICategoria){
        this.id = categoria.id;
        this.nome = categoria.nome;
    }

    //metodo estatico

    public static criar(props: CriarCategoriaProps): Categoria{
        let id = '1234';
        let {nome} = props;
        return new Categoria({id, nome})
    }

}

export {Categoria}