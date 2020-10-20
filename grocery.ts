class Grocery {
    name: string;
    quantity: number;
    pricePerUnit: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.pricePerUnit = price;
    }

    getTotalPrice() {
        return this.quantity * this.pricePerUnit;
    }

    toString() {
        return (
            `Product: ${this.name}, `                +
            `Quantity: ${this.quantity}, `           +
            `Price Per Unit: ${this.pricePerUnit}, ` +
            `Total Price: ${this.getTotalPrice()}`
        );
    }

    toJSON() {
        return {
            name: this.name,
            quantity: this.quantity,
            pricePerUnit: this.pricePerUnit,
            totalPrice: this.getTotalPrice()
        }
    }
}

const groceries: Array<Grocery> = [
    new Grocery('Milk', 5, 3.50),
    new Grocery('Soap', 3, .50),
    new Grocery('Toilet Paper', 8, 5.30),
    new Grocery('Chicken', 2, 7.85),
    new Grocery('Frosted Flakes', 1, 4.10),
    new Grocery('Apple', 12, .35)
];


(function () {
  const buildGroceryHeader = (): string => {
    return (
`<tr>
  <th>Product Name</th>
  <th>Product Quantity</th>
  <th>Product Price</th>
  <th>Product Total Price</th>
</tr>`
    );
};

  const buildGroceryRow = (grocery: Grocery): string => {
    const groceryJson = grocery.toJSON();
    
    return (
`<tr>
  <td>${groceryJson.name}</td>
  <td>${groceryJson.quantity}</td>
  <td>$${groceryJson.pricePerUnit.toFixed(2)}</td>
  <td>$${groceryJson.totalPrice.toFixed(2)}</td>
</tr>`
    );
  };

  const buildGroceryRows = (groceries: Array<Grocery>): string => {
    return groceries.map((grocery: Grocery) => buildGroceryRow(grocery)).join('\n');
  };

  const buildGroceryTable = (groceries: Array<Grocery>): string => {
    return (
`<table>
  ${buildGroceryHeader()}
  ${buildGroceryRows(groceries)}
</table>`
    );
  };

  document.getElementById('entry').innerHTML = buildGroceryTable(groceries);
})();
