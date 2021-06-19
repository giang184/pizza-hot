# _Pizza Hot_

#### _This is a website written in HTML, CSS, and Javascript to practice object oriented programming_

#### By _Andrew Giang_

## Technologies Used

* _HTML_
* _CSS_
* _bootstrap.css_
* JS
* Jquery

## Description

_This is my website written to take pizza orders from a user and displaying it on a list. The user can click on a pizza and its details will be displayed. Once the order is complete, the user will enter in their information and an order summary will be displayed._

## Setup/Installation Requirements
* Visit [this webpage](https://giang184.github.io/pizza-hot/). 

* Or clone [this]( https://github.com/giang184/pizza-hot) repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* none

## Test Spec

# Describe: Order()

- Test: "Creating an Order object by calling Order() constructor"
  - Code: let myOrder = Order();
  - Expected Output: create an Order object with default values

# Describe: Pizza()
- Test: "Creating a pizza object by calling function Pizza (size, crust, sauce, toppings) constructor"
  - Code: let p = new Pizza("small", "thin", "bbq", ["cheese", "sausage"]);
  - Expected Output: create an a Pizza object with arguments.

# Describe: Order.prototype.addPizza()

- Test: "add pizza object to an order"
  - Code: myOrder.addPizza(p);
  - Expected Output: myOrder will have 1 pizza added

# Describe: Pizza.prototype.calculateCost()
- Test: "the calculation of a pizza"
  - Code: p.calculateCost();
  - Expected Output: the cost will be calculated correctly to the parameters specified in the function

# Describe: Order.prototype.deletePizza()

- Test: "delete pizza objects to an order"
  - Code: myOrder.deletePizza(1);
  - Expected Output: myOrder will remote the pizza from the order


## License

* _[MIT](https://opensource.org/licenses/MIT)_

## Contact Information

* _Andrew Giang giang184@gmail.com_