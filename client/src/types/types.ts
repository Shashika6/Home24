export type AppContextType = {
  categories: ChildrenCategory[] | null;
  categoryType: string | null;
  products: Product[];
  cartProducts: Product[];
  productCount: number;
  updateCategories: (newCategories: ChildrenCategory[]) => void;
  updateCategoryType: (newCategoryType: string | null) => void;
  updateProducts: (newProducts: Product[]) => void;
  updateProductCount: (newProductCount: number) => void;
  updateCartProducts: (newCartProducts: Product[]) => void;
  error: string | null;
  setError: (errorMessage: string | null) => void;
};

export type Category = {
  name: string;
  categoryArticles: CategoryProduct;
  articleCount: number;
  childrenCategories: CategoryList;
};

export type CategoryProduct = {
  articles: Product[];
};

export type ChildrenCategory = {
  name: string;
  urlPath: string;
};

export type CategoryList = {
  list: ChildrenCategory[];
};

export type Product = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};
