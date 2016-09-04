//backend
function Pizza(size, pizzaToppings) {
  this.size = size;
  this.toppings = pizzaToppings;
}

Pizza.prototype.price = function(size, pizzaToppings) {
  console.log("topping: "+pizzaToppings);
  console.log("size:" + size);
  var finalPrice = size + pizzaToppings;

  return finalPrice;
};
//ui logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    size = parseInt($("input:radio[name=pieSize]:checked").val());
    toppings = $("input:checkbox[name=toppings]:checked");
      // console.log(size);

    var pizzaToppings = [];

    toppings.each(function() {
      pizzaToppings.push(parseInt($(this).val()));
    });

    var total = 0;
    if (pizzaToppings.length > 0) {
      total = pizzaToppings.reduce((a, b) => a + b, 0);
    }

    console.log("size: " + size + " total: " + total)
    var myPizza = new Pizza(size, total);
    $("#yourCost").text("$" + myPizza.price(size, total) + ".00");

  });
});
