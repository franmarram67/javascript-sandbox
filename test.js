export function hello() {
    console.log("HEY!");
}

export class Jimmy {
    constructor(level_of_dumbness, intrusive_thoughts) {
        this.level_of_dumbness = level_of_dumbness;
        this.intrusive_thoughts = intrusive_thoughts;
    }

    stupidMessage() {
        return `Jimmy is ${this.level_of_dumbness} points dumber than you think. His current intrusive thoughts are: "${this.intrusive_thoughts}"`;
    }
}