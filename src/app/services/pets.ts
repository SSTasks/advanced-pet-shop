// pet classes
export class Pet {
    _id: number;
    price: number;
    color: string;

    constructor(price, color) {
        this._id = Math.trunc(new Date().valueOf() * Math.random());
        this.price = price;
        this.color = color;
    }
}

export class Dog extends Pet {
    name: string;

    constructor(name, price, color) {
        super(price, color);
        this.name = name;
    }
}

export class Cat extends Pet {
    name: string;
    fluffy: boolean;

    constructor(name, price, color, fluffy) {
        super(price, color);
        this.name = name;
        this.fluffy = fluffy;
    }
}

export class Hamster extends Pet {
    fluffy: boolean;

    constructor(price, color, fluffy) {
        super(price, color);
        this.fluffy = fluffy;
    }
}
