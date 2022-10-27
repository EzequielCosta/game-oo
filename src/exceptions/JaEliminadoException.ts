import { Exception } from "./Exception";

export class JaEliminadoException extends Exception{
    
    constructor(message:string){
        super(message);
    }

}