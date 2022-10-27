import { BaseMilitar } from "./entities/BaseMilitar";
import { CenarioDeBatalha } from "./entities/CenarioDeBatalha";
import { Guerreiro } from "./entities/Guerreiro";
import { JaEliminadoException } from "./exceptions/JaEliminadoException";


class Main{

    main(){
        

        const cenarioDeBatalha = new CenarioDeBatalha();

        const guerreiro1 = new Guerreiro(100,'Guerreiro 1',10, 10);
        const guerreiro3 = new Guerreiro(102,'Guerreiro 2',10, 10);
        const guerreiro2 = new Guerreiro(103,'Guerreiro 3',10, 10);
        const guerreiro4 = new Guerreiro(104,'Guerreiro 4',10, 10);
        const guerreiro5 = new Guerreiro(105,'Guerreiro 5',10, 10);
        
        const baseMilitar1 = new BaseMilitar(500,10, 50)
        const baseMilitar2 = new BaseMilitar(501,10, 50)

        const exercito1 = [
            guerreiro1,
            guerreiro2,
            guerreiro3,
            guerreiro4,
            guerreiro5,
            baseMilitar1,
            baseMilitar2

        ];

        

        const guerreiro6 = new Guerreiro(106,'Guerreiro 1',10, 30);
        const guerreiro7 = new Guerreiro(107,'Guerreiro 2',10, 10);
        const guerreiro8 = new Guerreiro(108,'Guerreiro 3',10, 10);
        const guerreiro9 = new Guerreiro(109,'Guerreiro 4',10, 10);
        const guerreiro10 = new Guerreiro(110,'Guerreiro 5',10, 10);


        const baseMilitar3 = new BaseMilitar(502,10, 50)
        const baseMilitar4 = new BaseMilitar(503,10, 50)

        const exercito2 = [
            guerreiro6,
            guerreiro7,
            guerreiro8,
            guerreiro9,
            guerreiro10,
            baseMilitar3,
            baseMilitar4

        ];

        try{

            guerreiro1.atacar(guerreiro6);
            console.log(`Life Guerreiro 6: ${guerreiro6.life}`)

            guerreiro1.atacar(guerreiro6);
            console.log(`Life Guerreiro 6: ${guerreiro6.life}`)
            
            //Para o exército 2 ganhar, descomente o código abaixo

            // guerreiro1.atacar(guerreiro6);
            // console.log(`Life Guerreiro 6: ${guerreiro6.life}`)
        
            guerreiro2.atacar(baseMilitar2);
            console.log(`Percentual de dano Base 2: ${baseMilitar2.percentualDeDano}`)

            guerreiro5.atacar(baseMilitar4);
            console.log(`Percentual de dano Base 4: ${baseMilitar4.percentualDeDano}`)

            guerreiro4.atacar(baseMilitar3);
            console.log(`Percentual de dano Base 3: ${baseMilitar3.percentualDeDano}`)

            guerreiro8.atacar(baseMilitar1);
            console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            guerreiro8.atacar(baseMilitar1);
            console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            guerreiro8.atacar(baseMilitar1);
            console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)

            //Para o exército 1 ganhar, descomente o código abaixo

            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)
            // guerreiro8.atacar(baseMilitar1);
            // console.log(`Percentual de dano Base 1: ${baseMilitar1.percentualDeDano}`)

            

        }catch(e){
            if (e instanceof JaEliminadoException) console.log(e.message)    
        }


        console.log(cenarioDeBatalha.avaliar(exercito1,exercito2))

    }

}

(new Main()).main();