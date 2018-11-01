var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
x = { itemName: item, itemPrice: Math.floor(Math.random() * 101) } 
c = [x]
return `${item} has been added to your cart.`
}

function viewCart() {
 let y = [];
 if (c.length >= 3) {
  for (let i= 0; i < c.length; i++ ) {
    y.push(`${itemName} at ${itemPrice}.`); 
  } return `In your cart, you have ${y}.`
} if else(c.length === 2 ) {
  for (let i = 0; i < c.length; i++) {
    y.push(`${itemName} at ${itemPrice})
  }
}
}

function total() {
 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
