import React from "react";
import {CartItems, CartItemsHeader , CartItemsEmpty , CartItemsList, DivImage,CartItemsTitle, CartItemsImage, CartItemsFunction, CartItemsAdd ,CartItemsRemove ,CartItemsPrice ,CartItemsTotalPriceName ,CartItemsTotalPrice} from './ShoppingCart.elements'

const ShoppingCart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <CartItems>
      <CartItemsHeader>Cart Items</CartItemsHeader>

      {cartItems.length === 0 && (
        <CartItemsEmpty>No items are added.</CartItemsEmpty>
      )}

      <div>
        {cartItems.map((item) => (
          <CartItemsList key={item.id}>
            <DivImage>
              <CartItemsImage
                src={item.thumbnail}
                alt={item.title}
              />
            </DivImage>
            <CartItemsTitle>{item.title}</CartItemsTitle>

            <CartItemsFunction>
              <CartItemsAdd
                onClick={() => {
                  handleAddProduct(item);
                }}
              >
                +
              </CartItemsAdd>
              <CartItemsRemove
                onClick={() => {
                  handleRemoveProduct(item);
                }}
              >
                -
              </CartItemsRemove>
            </CartItemsFunction>
            <CartItemsPrice>
              {item.quantity} * ${item.price}
            </CartItemsPrice>
          </CartItemsList>
        ))}
      </div>
      <CartItemsTotalPriceName>
        <span>Total totalPrice</span>
        <CartItemsTotalPrice>${totalPrice}</CartItemsTotalPrice>
      </CartItemsTotalPriceName>
    </CartItems>
  );
};

export default ShoppingCart;
