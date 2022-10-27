import { Defensivel } from "../interfaces/Defensivel";
import { Guerreiro } from "./Guerreiro";

export class CenarioDeBatalha{

    avaliar(exercito1:Defensivel[], exercito2:Defensivel[]){

        let defensiveisEliminadosExercito1 = this.calcularDefensiveisEliminados(exercito1);
        let defensiveisEliminadosExercito2 = this.calcularDefensiveisEliminados(exercito2);

        if (defensiveisEliminadosExercito1 > defensiveisEliminadosExercito2){
            return 'Exercito 1 ganhou!';
        }
        
        if (defensiveisEliminadosExercito1 < defensiveisEliminadosExercito2){
            return 'Exercito 2 ganhou!'
        }
        
        return 'Empate';
        
    }

    calcularDefensiveisEliminados(exercito:Defensivel[]){

        let defensiveisEliminados = 0;

        exercito.forEach((defensivel) => {

            if (defensivel.estaEliminado()) defensiveisEliminados = (defensivel instanceof Guerreiro) ? 2 : 1;
            
        });

        return defensiveisEliminados;
    }
    
}