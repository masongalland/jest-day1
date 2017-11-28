const cart = require("./cart");

describe("Cart", () => {
  describe("Can add Item to cart", () => {
    test("Can add banana to cart", () => {
      //Arrange
      let product = {
        id: 1,
        name: "banana",
        price: 0.75
      };
      //Action
      cart.addItemToCart(product);
      let result = cart.getCart().indexOf(product);

      //Assert
      expect(result).not.toBe(-1);
    });
  });
  describe("Can remove items from cart", () => {
    test("Can remove peach from cart when peach is present", () => {
      //Arrange
      let product = {
        id: 2,
        name: "peach",
        price: 1.5
      };
      //Action
      cart.addItemToCart(product);
      cart.removeItemFromCart(product);
      let result = cart.getCart().indexOf(product);

      //Assert
      expect(result).toBe(-1);
    });
    test("Does not remove anything if tries to remove apple when it is not present", () => {
      //Arrange
      let product = {
        id: 3,
        name: "apple",
        price: 1.5
      };
      //Action
      let initialCount = cart.getCart().length;
      cart.removeItemFromCart(product);
      let result = cart.getCart().length;

      //Assert
      expect(result).toBe(initialCount);
    });
  });
});
