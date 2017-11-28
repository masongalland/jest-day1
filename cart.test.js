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
  describe("Calculates Totals Correctly", () => {
    beforeEach(() => {
      cart.clearCart();
    });

    test("GetTotal returns 0 when cart is empty", () => {
        //Arrange

        //Action
        let result = cart.calculateTotal();
        //Assert
        expect(result).toBe(0);
    });
    test("GetTotal returns 1.50 when only an apple is present", () => {
        //Arrange
        let product = {
            name: 'apple',
            price: 1.50
        }
        cart.addItemToCart(product);
        //Action
        let result = cart.calculateTotal()

        //Assert
        expect(result).toBe(1.50)

    });
    test("GetTotal returns correct total for 3 items", () => {
        //Arrange
        let p1 = 1.00
        let p2 = 2.00
        let p3 = 9.99
        let product1 = {
            price: p1
        }
        let product2 = {
            price: p2
        }
        let product3 = {
            price: p3
        }

        //Action
        cart.addItemToCart(product1)
        cart.addItemToCart(product2)
        cart.addItemToCart(product3)
        let result = cart.calculateTotal();

        //Assert
        expect(result).toBeCloseTo(p1 + p2 + p3)
    });
  });
});
