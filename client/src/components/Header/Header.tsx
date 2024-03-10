import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { HOME24_LOGO_LABEL, CART_TITLE } from "../../constants/localization";
import { Product } from "../../types/types";
import Cart from "../Cart/Cart";
import { ShoppingCart } from "react-feather";
import {
  HeaderWrapper,
  Logo,
  ActionWrapper,
  SearchWrapper,
  SearchDropdown,
  SearchField,
  SearchResultProduct,
  CartWrapper,
} from "./Header.style";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { products, cartProducts, updateCartProducts } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Use a timeout to prevent over filtering
    if (!searchValue.trim()) {
      setFilteredProducts([]);
      return;
    }
    const timer = setTimeout(() => {
      const filteredResults: Product[] = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filteredResults);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, products]);

  const handleCartClick = () => {
    if (!cartProducts.length) {
      alert("No products in the cart");
      return;
    }
    setShowCart(!showCart);
  };

  const showResultAndConfirmAddtoCart = (product: Product): void => {
    const userConfirmationToAddToCart = window.confirm(
      `You selected ${product.name} its price is ${product.prices.currency} ${product.prices.regular.value} \nDo you want to add this to the cart ?`
    );

    userConfirmationToAddToCart &&
      updateCartProducts([...cartProducts, product]);
  };

  return (
    <HeaderWrapper role="header">
      <Logo>{HOME24_LOGO_LABEL}</Logo>
      <ActionWrapper>
        <SearchWrapper>
          <SearchField
            type="search"
            aria-label="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setSearchValue(e.target.value)
            }
          />
          {filteredProducts.length > 0 && (
            <SearchDropdown>
              {filteredProducts.map((product) => (
                <SearchResultProduct
                  onClick={(): void => {
                    showResultAndConfirmAddtoCart(product);
                  }}
                  key={product.name}
                >
                  {product.name}
                </SearchResultProduct>
              ))}
            </SearchDropdown>
          )}
        </SearchWrapper>
        <CartWrapper onClick={handleCartClick}>
          <ShoppingCart size={16} strokeWidth={3} />
          {CART_TITLE} ({cartProducts.length})
        </CartWrapper>
      </ActionWrapper>

      {showCart && <Cart setShowCart={setShowCart} />}
    </HeaderWrapper>
  );
};

export default Header;
