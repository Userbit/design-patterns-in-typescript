interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Collection {
  createIterator(): Iterator<number>;
}

class ConcreteIterator implements Iterator<number> {
  private _collection: number[];
  private _index: number = 0;

  constructor(newCollection: number[]) {
    this._collection = newCollection;
  }

  next(): number {
    const result = this._collection[this._index];
    this._index += 1;
    return result;
  }

  hasNext(): boolean {
    return this._index < this._collection.length;
  }

  private log(): void {
    console.log(`Logging ${this._collection[this._index]}`);
  }
}

class ConcreteCollection implements Collection {
  private _collection: number[] = [];

  constructor(collection: number[]) {
    this._collection = collection;
  }

  createIterator(): Iterator<number> {
    return new ConcreteIterator(this._collection);
  }
}

(function main() {
  const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);
  const iterator: Iterator<number> = collection.createIterator();

  while (iterator.hasNext()) {
    const number: number = iterator.next();
    console.log(`Logging: ${number}`);
  }
})();
