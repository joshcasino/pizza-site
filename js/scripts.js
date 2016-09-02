//backend
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.price = function(size) {
  var size =  parseInt($("input:radio[name=pieSize]:checked").val());
  console.log(size);
  var prices = []


  if (this.size === "13") {
      prices.size
  } else if (this.size === "11") {
      prices.size
  } else {
    // console.log(cost);
      prices.size;
  }
return size;
};
//ui logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
      size = $("input:radio[name=pieSize]:checked").val();
      // console.log(size);

    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {

    pizzaToppings.push($(this).val());
      console.log(pizzaToppings);
      total = 0
      for (i = 0; i <= pizzaToppings.length; i++) {
        total += parseInt(pizzaToppings[i]);
      }
    // return parseInt(pizzaToppings * 2);




    var myPizza = new Pizza(size, pizzaToppings);
    $("#yourCost").text("$" + myPizza.price() + ".00");
    });
  });
});
