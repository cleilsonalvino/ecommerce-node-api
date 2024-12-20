import { randomUUID } from "crypto";
import { an } from "vitest/dist/chunks/reporters.D7Jzd9GS";
import { IDEntityUUIDInvalid } from "./domain.exeption";

const isEntity = (v: any): v is Entity<any> =>{
    return v instanceof Entity;
}

abstract class Entity<T>{
    //atributos
    private _id: string;

    //gets e sets

    public get id(): string {
        return this._id;
    }

    private set id(value: string) {

        if (!Entity.validUUID(value)){
            throw new IDEntityUUIDInvalid();
        }

        this._id = value;
    }

    //construtor

    constructor(id?: string){
        this.id = id ? id : randomUUID()
    }

    //metodos

    public equals(object?: Entity<T>): boolean{
        if(object == null || object == undefined){
            return false
        }

        if(this === object){
            return true
        }

        if(!isEntity(object)){
            return false
        }

        return this._id == object._id
    }

    public static validUUID(UUID: string): boolean {
        let padraoUUID: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return padraoUUID.test(UUID);
    } 
}

export {Entity}