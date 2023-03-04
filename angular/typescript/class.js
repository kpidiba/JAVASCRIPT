"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employe_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employe {
    static getEmployeNumber() {
        return 0;
    }
    //constructors
    constructor(id, name, address) {
        //attributs
        //private = #
        _Employe_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employe_id, id, "f");
        this.nom = name;
        this.address = address;
    }
    Login() {
        return {
            name: '',
            age: 1,
            id: 1,
            email: "1@gmail.com"
        };
    }
    getNom() {
        return this.nom;
    }
    getAddress() {
        return this.address;
    }
    setNom(nom) {
        this.nom = nom;
    }
    setAdress(adress) {
        this.address = adress;
    }
    getId() {
        return __classPrivateFieldGet(this, _Employe_id, "f");
    }
}
_Employe_id = new WeakMap();
let employe = new Employe(90337055, "David", { street: "beach", city: "tv-all", state: "man-united" });
employe.setNom("Florento");
console.log(employe.getNom());
console.log(Employe.getEmployeNumber());
console.log(employe);
