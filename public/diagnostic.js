/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

const order = Ember.Object.extend({
  orderPrice: Ember.computed('quantity', 'unitPrice', function () {
    return this.get('quantity') * this.get('unitPrice');
  }),
  orders: [],
  addToCart: Ember.computed('quanity', 'item', function () {
    let orders = this.get('orders');
    return orders.add('quanity', 'item');
  })


});


// let order1 = {
//   quantity: "2 hats",
//   unitPrice: "$5"
// };
//
// let order2 = {
//   quantity: "1 desk lamp",
//   unitPrice: "$20"
// };
//
// let order3 = {
//   quantity: "3 hand towels",
//   unitPrice: "$8"
// };
