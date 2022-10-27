import { Personagem } from "../abstracts/Personagem";
import { Atingivel } from "../interfaces/Atingivel";
import { Defensivel } from "../interfaces/Defensivel";

export class BaseMilitar implements Defensivel{
   
    private _percentualDeDano:number = 0;

    public constructor( private _id:number,private _localizacao_x:number,private _localizacao_y:number){}
    
    estaEliminado(): boolean {
        return this._percentualDeDano >= 90;
    }
    defenderAtaque(valorAtaque: number): void {
        this._percentualDeDano += valorAtaque;
    }

    get percentualDeDano(){
        return this._percentualDeDano;
    }


}