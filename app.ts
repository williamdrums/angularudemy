let message: string = "Ola, estamos testando o app typescript!"
console.log(message);

let episode: number = 4
console.log("This is episode" + 4)
episode = episode + 1
console.log("Next episode is" + episode)

// tipo Any não é nescessario declarar o tipo
let favoritDroid //let só é acessada dentro do bloco
favoritDroid = 'BB-8'
// favoritDroid = 10
console.log("My favorite droid is " + favoritDroid)

//funcoes typescript
let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)// parsecs(distancia) são suficientes para vencer o Millennium Falcon?

//usando arrow function =>
let call = (name: string) => console.log(`Você é Desenvolvedor?, ${name}!`)
call('SIM')

//parametros padroes ts
function incremento(speed: number, inc: number = 1): number {
    return speed + inc
}
console.log(`incremento(5,1) = ${incremento(5, 1)}`)//saida = 6
console.log(`incremento(5) = ${incremento(5)}`)//saida = 6

//aula 3 classes e interface ts
class Spacecraft {

    //dessa forma estou enxugando a declaracao de atributo na classe
    constructor(public propulsor: string) { }
    //metodo nao precisa ser declarado function na frente
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor} (entrado no hyperspaco utilizando propursor ${this.propulsor})`)//entrado no hyperspaco utilizando propursor
    }
}
//instanciando objeto
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership {

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
//criando um objeto 
let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {
    cargoContainres: number
}

let goodForTheJob = (ship: Containership ) => ship.cargoContainres > 2
console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes': 'no'}`)