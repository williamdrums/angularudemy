"use strict";
// let message: string = "Ola, estamos testando o app typescript!"
// console.log(message);
exports.__esModule = true;
// let episode: number = 4
// console.log("This is episode" + 4)
// episode = episode + 1
// console.log("Next episode is" + episode)
// // tipo Any não é nescessario declarar o tipo
// let favoritDroid //let só é acessada dentro do bloco
// favoritDroid = 'BB-8'
// // favoritDroid = 10
// console.log("My favorite droid is " + favoritDroid)
// //funcoes typescript
// let isEnoughToBeatMF = function (parsecs: number): boolean {
//     return parsecs < 12
// }
// let distance = 14
// console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)// parsecs(distancia) são suficientes para vencer o Millennium Falcon?
// //usando arrow function =>
// let call = (name: string) => console.log(`Você é Desenvolvedor?, ${name}!`)
// call('SIM')
// //parametros padroes ts
// function incremento(speed: number, inc: number = 1): number {
//     return speed + inc
// }
// console.log(`incremento(5,1) = ${incremento(5, 1)}`)//saida = 6
// console.log(`incremento(5) = ${incremento(5)}`)//saida = 6
var base_ships_1 = require("./dist/base-ships");
var starfigthers_1 = require("./dist/starfigthers");
//instanciando objeto
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
//criando um objeto 
var falcon = new starfigthers_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainres > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
