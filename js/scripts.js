//Business Logic for Pizza HOT
function Order() {
  this.pizzaList = {};
  this.currentID = 0;
  this.total = 0;
  this.pizzaCount = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignPizzaID();
  this.pizzaList[pizza.id]=pizza;
  this.total += pizza.calculateCost();
  this.pizzaCount ++;
};

Order.prototype.assignPizzaID = function () {
  this.currentID++;
  return this.currentID;
};

Order.prototype.findPizza = function (id) {
  if(this.pizzaList[id] != undefined) {
    return this.pizzaList[id];
  }
  return false;
};

Order.prototype.deletePizza = function (id) {
  if(this.pizzaList[id] === undefined) {
    return false;
  }
  this.total -= this.pizzaList[id].calculateCost();
  delete this.pizzaList[id];
  this.pizzaCount --;
  return true;
}

// Business Logic for Pizza ---------
function Pizza (size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.calculateCost = function () {
  let cost = 10;

  //additional charges for size
  if (this.size === "small")
    cost++;
  else if (this.size === 'medium')
    cost += 3;
  else
    cost +=5;

  //additional charges for special crust
  if(this.crust === 'deep' || this.crust === 'stuffed')
    cost += 2;

  //additional charges for toppings
  if(this.toppings.length < 2)
    cost++;
  else if(this.toppings.length < 3)
    cost+=2;
  else
    cost+=4;

  return cost;
}

// User Interface Logic ---------
let myOrder = new Order ();

function displayOrderDetails (orderToDisplay) {
  let pizzaUL = $("ul#pizzaList");
  let text = "";
  Object.keys(orderToDisplay.pizzaList).forEach (function (key) {
    const pizza = orderToDisplay.findPizza(key);
    text += "<li id=" +pizza.id + ">" + pizza.size + ", " + pizza.toppings.length + " toppings" +"</li>";
  });
  pizzaUL.html(text);
}

function showPizza (pizzaID) {
  const pizza = myOrder.findPizza(pizzaID);
  pizzaText=pizza.toppings[0];
  for(let i=1; i<pizza.toppings.length; i++)
  {
    pizzaText += ", " + pizza.toppings[i];
  }
  $("#show-pizza").show();
  $(".size").html(pizza.size);
  $(".crust").html(pizza.crust);
  $(".sauce").html(pizza.sauce);
  $(".toppings").html(pizzaText);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
}

function attachListeners() {
  $("ul#pizzaList").on("click", "li", function () {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    myOrder.deletePizza(this.id);
    $("#show-pizza").hide();
    displayOrderDetails(myOrder);
  });
}

$(document).ready(function () {
  attachListeners();
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("#size").val();
    const inputtedCrust = $("#crust").val();
    const inputtedSauce = $("#sauce").val();
    const inputtedToppings = [];
    if($('#cheese').is(':checked'))
      inputtedToppings.push("cheese");
    if($('#pepperoni').is(':checked'))
      inputtedToppings.push("pepperoni");
    if($('#sausage').is(':checked'))
      inputtedToppings.push("sausage");
    if($('#mushroom').is(':checked'))
      inputtedToppings.push("mushroom");
    if($('#pineapple').is(':checked'))
      inputtedToppings.push("pineapple");

    const newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedToppings);
    myOrder.addPizza(newPizza);
    displayOrderDetails(myOrder);
  });

  $("button#completeOrder").click(function() {
    $("#bottom").toggle();
  });


  $("form#order").submit(function (event) {
    event.preventDefault();
    const inputtedName = $("#name").val();
    const inputtedAddress = $("#address").val();
  
    $(".name").html(inputtedName);
    $(".address").html(inputtedAddress);
    $(".order").html(myOrder.pizzaCount);
    $(".subtotal").html(myOrder.total);

    if($("#option").val() === "delivery")
    {
      myOrder.total += 5;
      $(".total").text( (1.1*myOrder.total).toFixed(2) + " (including tax and $5 delivery fee)");
    }
    else {
      $(".total").html((1.1*myOrder.total).toFixed(2) + " (including tax)");
    }

    $("#orderSummary").show();
  });

  $("button#startNew").click(function() {
    myOrder = new Order();
    $("#bottom").toggle();
    $("#orderSummary").toggle();
    displayOrderDetails(myOrder);
  });
});

