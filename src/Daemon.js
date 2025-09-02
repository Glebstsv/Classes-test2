import Charecter from "./characters";

export default class Daemon extends Charecter {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}