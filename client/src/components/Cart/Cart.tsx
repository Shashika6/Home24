import React from "react";
import { useAppContext } from "../../context/AppContext";
import { createNumberFormatter } from "../../utils";
import { Product } from "../../types/types";
import {
  CartWrapper,
  CartActionButton,
  CartActionWrapper,
  CartCloseButton,
  CartHeader,
  CartHeading,
  CartProduct,
  CartProductImageWrapper,
  CartProductIcon,
  CartProductName,
  CartProductPrice,
  CartTotalLabel,
  CartTotalPrice,
  CartTotalWrapper,
  CartActionSecondaryButton,
} from "./Cart.style";

import { X } from "react-feather";
import {
  CART_TOTAL_LABEL,
  CART_CHECKOUT_BUTTON_LABEL,
  CART_CLEAR_CART_BUTTON_LABEL,
  CART_TITLE,
} from "../../constants/localization";

type CartProps = {
  setShowCart: (show: boolean) => void;
};

const calculateTotal = (cartProducts: Product[]): number => {
  const total = cartProducts.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.prices.regular.value;
  }, 0);

  return total;
};

const Cart: React.FC<CartProps> = ({ setShowCart }) => {
  const { cartProducts, updateCartProducts, error } = useAppContext();
  const total = createNumberFormatter().format(
    calculateTotal(cartProducts) / 100
  );

  const closeCart = (): void => {
    setShowCart(false);
  };

  const clearCartProducts = (): void => {
    updateCartProducts([]);
    setShowCart(false);
  };

  return (
    <CartWrapper aria-label="cart">
      <CartHeader>
        <CartHeading>{CART_TITLE}</CartHeading>
        <CartCloseButton onClick={closeCart}>
          <X />
        </CartCloseButton>
      </CartHeader>
      {error && <>{error}</>}
      {!error &&
        cartProducts.map((product, id) => (
          <CartProduct isEven={id % 2 === 0} key={`${product} ${id}`}>
            <CartProductImageWrapper>
              <CartProductIcon
                alt="image thumbnail"
                src={product.images[0].path}
              ></CartProductIcon>
            </CartProductImageWrapper>

            <CartProductName>{product.name}</CartProductName>
            <CartProductPrice>
              {createNumberFormatter().format(
                product.prices.regular.value / 100
              )}
            </CartProductPrice>
          </CartProduct>
        ))}
      <CartTotalWrapper>
        <CartTotalLabel>{CART_TOTAL_LABEL} </CartTotalLabel>
        <CartTotalPrice>{total}</CartTotalPrice>
      </CartTotalWrapper>
      <CartActionWrapper>
        <CartActionButton
          onClick={() => {
            alert("Not implemented");
          }}
        >
          {CART_CHECKOUT_BUTTON_LABEL}
        </CartActionButton>
        <CartActionSecondaryButton onClick={clearCartProducts}>
          {CART_CLEAR_CART_BUTTON_LABEL}
        </CartActionSecondaryButton>
      </CartActionWrapper>
    </CartWrapper>
  );
};

export default Cart;
