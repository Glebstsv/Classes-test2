import Charecter from "./characters";

export default class Magician extends Charecter {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}