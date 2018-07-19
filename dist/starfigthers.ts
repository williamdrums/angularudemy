import { Spacecraft,Containership } from './base-ships'
export class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainres: number
    constructor() {
        //ao criar a milleniumfalcon tambem crio uma spacecraft
        // a sim tenho que passar qual o propulsor padrao
        super('hyperdrive')//atribui valor ao objeto
        this.cargoContainres = 2
    }
    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace() //chamando o construtor da classe base
        } else { console.log('Failed to jump into hyperspace') }
    }
}




