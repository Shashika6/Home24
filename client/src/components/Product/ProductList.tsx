import React from "react";
import Product from "./Product";
import { useAppContext } from "../../context/AppContext";
import { NO_PRODUCTS_LABEL, ERROR_STATE } from "../../constants/localization";
import {
  ProductListWrapper,
  ProductHeading,
  ProductCount,
  ProductsWrapper,
} from "./ProductList.style";

const ProductList: React.FC = () => {
  const { products, error, categoryType, productCount } = useAppContext();

  if (error) {
    return <>{`${ERROR_STATE} ${error}`}</>;
  }

  return products.length ? (
    <ProductListWrapper aria-label="products">
      <ProductHeading>
        {categoryType}
        <ProductCount> ({productCount})</ProductCount>
      </ProductHeading>
      <ProductsWrapper >
        {products.map((product, index) => (
          <Product key={`${product.variantName} ${index}`} product={product} />
        ))}
      </ProductsWrapper>
    </ProductListWrapper>
  ) : (
    <>{NO_PRODUCTS_LABEL}</>
  );
};

export default ProductList;
