import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, ChildrenCategory, Product } from "../types/types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<ChildrenCategory[] | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [productCount, setProductCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const [categoryType, setCategoryType] = useState<string | null>(null);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const updateCategories = (newCategories: ChildrenCategory[]): void => {
    setCategories(newCategories);
  };

  const updateProducts = (newProducts: Product[]): void => {
    setProducts(newProducts);
  };

  const updateCategoryType = (newCategoryType: string | null): void => {
    setCategoryType(newCategoryType);
  };

  const updateProductCount = (newProductCount: number): void => {
    setProductCount(newProductCount);
  };

  const updateCartProducts = (newCartProducts: Product[]): void => {
    setCartProducts(newCartProducts);
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        categoryType,
        cartProducts,
        productCount,
        products,
        updateCategories,
        updateProducts,
        updateCategoryType,
        updateProductCount,
        updateCartProducts,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return context;
};
