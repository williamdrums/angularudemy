var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Ola, estamos testando o app typescript!";
console.log(message);
var episode = 4;
console.log("This is episode" + 4);
episode = episode + 1;
console.log("Next episode is" + episode);
// tipo Any não é nescessario declarar o tipo
var favoritDroid; //let só é acessada dentro do bloco
favoritDroid = 'BB-8';
// favoritDroid = 10
console.log("My favorite droid is " + favoritDroid);
//funcoes typescript
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO')); // parsecs(distancia) são suficientes para vencer o Millennium Falcon?
//usando arrow function =>
var call = function (name) { return console.log("Voc\u00EA \u00E9 Desenvolvedor?, " + name + "!"); };
call('SIM');
//parametros padroes ts
function incremento(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("incremento(5,1) = " + incremento(5, 1)); //saida = 6
console.log("incremento(5) = " + incremento(5)); //saida = 6
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
//instanciando objeto
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = 
        //ao criar a milleniumfalcon tambem crio uma spacecraft
        // a sim tenho que passar qual o propulsor padrao
        _super.call(this, 'hyperdrive') //atribui valor ao objeto
         || this;
        _this.cargoContainres = 2;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this); //chamando o construtor da classe base
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
//criando um objeto 
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainres > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
