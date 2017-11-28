let cart = [];

module.exports = {
    addItemToCart: function(product){
        cart.push(product);
    },
    removeItemFromCart: function(product){
       let index = cart.indexOf(product);
       cart.splice(index, 1)
    },
    calculateTotal: function(){
        cart.reduce((a,b)=> a + b.price, 0)
    }
}