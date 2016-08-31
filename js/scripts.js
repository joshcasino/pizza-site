//backend
function Pizza(size, toppings) {
  this.size = size;
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
    if (this.size === "large") {
        prices.push(baseCost = baseCost + 5)
    } else if (this.size === "medium") {
        prices.push(baseCost = baseCost + 4)
    } else {
      return baseCost;
    }
    console.log(baseCost);

};

//ui logic
$(document).ready(function() {
    $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var size = $("input:radio[name=pieSize]:checked").val();
        var toppings = $("input:radio[name=toppings]:checked").val();
        var myPizza = new Pizza(size, toppings);
        $("#yourCost").text("$" + myPizza.price() + ".00");
    });
});
