const functions = require("./functions.js");

test("The returnsBobRoss function returns Bob Ross", () => {
  //Arrange
  //Nothing to setup

  //Act
  let result = functions.returnsBobRoss();

  //Assert
  expect(result).toMatch(/Bob Ross/i);
});

describe("Add Function", () => {
  test("The add function adds 3 and 5 to get 8", () => {
    //Arrange
    let num1 = 3;
    let num2 = 5;

    //Act
    let result = functions.add(num1, num2);

    //Assert
    expect(result).toBe(8);
  });

  test("The add function adds -3 and 5 to get 2", () => {
    //Arrange
    let num1 = -3;
    let num2 = 5;

    //Act
    let result = functions.add(num1, num2);

    //Assert
    expect(result).toBe(2);
  });
  test("The add function adds .1 and .2 to get .3", () => {
    //Arrange
    let num1 = .1;
    let num2 = .2;

    //Act
    let result = functions.add(num1, num2);

    //Assert
    expect(result).toBeCloseTo(.3);
  });
});

describe('Multiply Function', ()=>{
    test('Multiply function multiplies 5 and 6 to get 30', ()=>{
        //Arrange
        let num1 = 5;
        let num2 = 6;

        //Act
        let result = functions.multiply(num1, num2)

        //Assert
        expect(result).toBe(30)
    })
})
