var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random() * 101)
 var tempobj = {
   itemName: item,
   itemPrice: price}
 cart.push(tempobj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(!Array.isArray(cart) || !cart.length)
    return "Your shopping cart is empty."
  else if (cart.length == 1)
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  else if(cart.length == 2)
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  else {
    var arr = []
    for(let i = 0; i<cart.length-1; i++) {
      arr.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`)
    }
    return `In your cart, you have${arr} and ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(let i = 0; i<cart.length; i++) {
    totalPrice += cart[i][Object.keys(cart[i])]
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
    return `Sorry, we don't have a credit card on file for you.`
  else {
    let total = total()
    for(let i=cart.length; i>=0; i--) {
      cart.pop()
    }
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
