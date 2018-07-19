"use strict";
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
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
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
}(base_ships_1.Spacecraft));
exports.MillenniumFalcon = MillenniumFalcon;
