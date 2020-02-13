interface Coffee {
  cost(): number;
}

class GeneralCoffee implements Coffee {
  cost(): number {
    return 10;
  }
}

class CoffeeExtraDecorator implements Coffee {
  private _coffee: Coffee;

  constructor(coffee: GeneralCoffee) {
    this._coffee = coffee;
  }

  cost(): number {
    return this._coffee.cost();
  }
}

class BubbleDecorator extends CoffeeExtraDecorator {
  private _price: number = 3;

  cost(): number {
    return super.cost() + this._price;
  }
}

class MilkDecorator extends CoffeeExtraDecorator {
  private _price: number = 2.5;
  private _freshExtra: number = 1.5;

  cost(): number {
    return super.cost() + this._price + this._freshExtra;
  }
}

(function main() {
  const general = new GeneralCoffee();
  const withBubble = new BubbleDecorator(general);
  const withMilk = new MilkDecorator(withBubble);
  console.log(`Total: ${withMilk.cost()}`);
})();
