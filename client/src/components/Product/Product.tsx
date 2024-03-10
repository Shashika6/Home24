import React from "react";
import { Product } from "../../types/types";
import { createNumberFormatter } from "../../utils";
import { useAppContext } from "../../context/AppContext";
import { ADD_TO_CART_BUTTON_LABEL } from "../../constants/localization";
import {
  ProductWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  AddToCartButton,
} from "./Product.style";

type ProductProps = {
  product: Product;
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { cartProducts, updateCartProducts } = useAppContext();

  const handleAddToCart = () => {
    updateCartProducts([...cartProducts, product]);
  };

  return (
    <ProductWrapper aria-label="product">
      <ProductImageWrapper>
        <ProductImage
          alt={`Product: ${product.name}`}
          src={product.images[0].path}
        />
      </ProductImageWrapper>

      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          {createNumberFormatter().format(product.prices.regular.value / 100)}
        </ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>
          {ADD_TO_CART_BUTTON_LABEL}
        </AddToCartButton>
      </ProductDetails>
    </ProductWrapper>
  );
};

export default ProductCard;
