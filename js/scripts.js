//backend
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var baseCost = 9
    if (this.toppings === "pepperoni") {
        baseCost = baseCost + 1
    }
    if (this.toppings === "mushrooms") {
        baseCost = baseCost + 2
    }
    if (this.toppings === "peppers") {
        baseCost = baseCost + 3
    }
    if (this.size === "large") {
        baseCost = baseCost + 10
    } else if (this.size === "medium") {
        baseCost = baseCost + 5
    } else {
        baseCost = baseCost;
    }
    console.log(baseCost);
    return baseCost;
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
