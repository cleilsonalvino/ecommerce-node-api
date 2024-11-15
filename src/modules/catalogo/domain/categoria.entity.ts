import { CategoriaNuloOuIndefinido, NomeCategoriatamanhoMaximoInvalido, NomeCategoriatamanhoMinimoInvalido} from "./categoria.exception";
import { ICategoria, CriarCategoriaProps } from "./categoria.types";

class Categoria implements ICategoria {

    ///////////////////////
	//Atributos de Classe//
	///////////////////////

    private _id: string;
	private _nome: string;

    ///////////////
	//Gets e Sets//
	///////////////

    public get id(): string {
        return this._id;
    }

    private set id(value: string) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    private set nome(value: string) {
        if (value === null || value === undefined) {
            throw new CategoriaNuloOuIndefinido();
        }

        if (value.trim().length < 3) {
            throw new NomeCategoriatamanhoMinimoInvalido();
        }

        if (value.trim().length > 50) {
            throw new NomeCategoriatamanhoMaximoInvalido();
        }

        this._nome = value;
    }

    //////////////
	//Construtor//
	//////////////

    private constructor(categoria:ICategoria){
        this.id = categoria.id;
        this.nome = categoria.nome;
    }

    /////////////////////////
    //Static Factory Method//
    /////////////////////////

    public static criar(props: CriarCategoriaProps): Categoria {
        let id = "12345"; //Refatorar para gerar id com UUID
        let { nome } = props;
        return new Categoria({id, nome});
    }

}

export { Categoria }