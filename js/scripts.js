// backend
function pizza(toppings, pieSize, cost) {
  this.toppingsList = toppings;
  this.pizzaSize = pieSize;
  this.price = cost;
  }

var plainPie1 = new pizza(["none"], "small", 8.99)
var plainPie2 = new pizza(["none"], "medium", 9.99)
var plainPie3 = new pizza(["none"], "small", 10.99)
var pepperoniPie1 = new pizza(["pepperoni"], "small", 10.99)
var pepperoniPie2 = new pizza(["pepperoni"], "medium", 11.99)
var pepperoniPie3 = new pizza(["pepperoni"], "small", 12.99)
