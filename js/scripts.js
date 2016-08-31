//backend
function Pizza(pieSize, toppings) {
  this.pieSize = pieSize;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var baseCost = 9
  var prices = []
    if (this.toppings === "pepperoni") {
        prices.push(baseCost = baseCost + 3)
        console.log(prices);
    }
    if (this.toppings === "mushrooms") {
        prices.push(baseCost = baseCost + 2)
    }
    if (this.toppings === "peppers") {
        prices.push(baseCost = baseCost + 2)
    }
    if (this.pieSize === "large") {
        prices.push(baseCost = baseCost + 4)
    } else if (this.pieSize === "medium") {
        prices.push(baseCost = baseCost + 2)
    } else {
      return baseCost;
    }
    console.log(baseCost);

};

//ui logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var pieSize = $("input:radio[name=pieSize]:checked").val();
    console.log(pieSize);
    var toppings = $("input:checkbox[name=toppings]:checked").val();
    var myPizza = new Pizza(pieSize, toppings);
    $("#yourCost").text("$" + myPizza.price() + ".00");
  });
});
