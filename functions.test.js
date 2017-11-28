const functions = require('./functions.js')

test('The returnsBobRoss function returns Bob Ross', ()=>{
    //Arrange
        //Nothing to setup

    //Act
    let result = functions.returns.BobRoss();

    //Assert
    expect(result).toBe('Bob Ross')
})