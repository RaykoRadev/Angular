class Box<T> {
    private _store: T[];
    constructor() {
        this._store = [];
    }
    add(element: T) {
        this._store.push(element);
    }
    remove() {
        this._store.pop();
    }
    get count(): number {
        return this._store.length;
    }
}

// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
