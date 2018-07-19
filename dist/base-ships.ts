//aula 3 classes e interface ts
class Spacecraft {

    //dessa forma estou enxugando a declaracao de atributo na classe
    constructor(public propulsor: string) { }
    //metodo nao precisa ser declarado function na frente
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor} (entrado no hyperspaco utilizando propursor ${this.propulsor})`)//entrado no hyperspaco utilizando propursor
    }
}
interface Containership {
    cargoContainres: number
}

export { Spacecraft, Containership } //declarando modulo na classe e na interface