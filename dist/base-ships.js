"use strict";
exports.__esModule = true;
//aula 3 classes e interface ts
var Spacecraft = /** @class */ (function () {
    //dessa forma estou enxugando a declaracao de atributo na classe
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    //metodo nao precisa ser declarado function na frente
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor + " (entrado no hyperspaco utilizando propursor " + this.propulsor + ")"); //entrado no hyperspaco utilizando propursor
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
