import { Personagem } from "../abstracts/Personagem";
import { JaEliminadoException } from "../exceptions/JaEliminadoException";
import { Atingivel } from "../interfaces/Atingivel";
import { Defensivel } from "../interfaces/Defensivel";

export class Guerreiro  implements Defensivel{
   
    private _life:number;

    public constructor( private _id:number,private _descricao:string,private _forcaAtaque:number,life:number){
        this._life = life;
    }

    estaEliminado(): boolean {
        return this._life === 0
    }
    
    defenderAtaque(valorAtaque: number): void {
        this._life -= valorAtaque;
    }

    atacar (defensivel:Defensivel) : void{

        if (defensivel.estaEliminado()){
            throw new JaEliminadoException("O defensível já está eliminado.");
        }

        defensivel.defenderAtaque(this._forcaAtaque);
    }

    get life(){
        return this._life;
    }

    
}