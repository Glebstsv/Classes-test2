import Charecter from "./characters";

export default class Bowman extends Charecter {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}