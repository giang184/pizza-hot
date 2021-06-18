//Business Logic for Pizza HOT
function Order() {
  this.pizzaList = {};
  this.currentID = 0;
  this.total = 0;
  this.deliveryCost = false;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignPizzaID();
  this.pizzaList[pizza.id]=pizza;
  this.total += pizza.calculateCost();
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
  let cost = 7;

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