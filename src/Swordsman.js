import Charecter from "./characters";

export default class Swordsman extends Charecter {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}