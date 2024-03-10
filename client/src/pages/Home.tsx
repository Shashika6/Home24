import React, { useEffect } from "react";
import ProductCardList from "../components/Product/ProductList";
import useApi from "../hooks/useApi";
import { useAppContext } from "../context/AppContext";
import {
  ERROR_FETCHING_CATEGORY_RESPONSE,
} from "../constants/localization";
import DefaultLayout from "../components/Layout/Layout";
import { getCategoriesAndArticles } from "../services/getCategoriesAndArticles";

const Home: React.FC = () => {
  const {
    updateCategories,
    setError,
    updateProducts,
    updateCategoryType,
    updateProductCount,
  } = useAppContext();

  const { data, loading, error } = useApi(getCategoriesAndArticles);

  useEffect(() => {
    if (error) {
      setError(ERROR_FETCHING_CATEGORY_RESPONSE);
      return;
    }
    if (!data) return;

    updateCategories(data.childrenCategories.list);
    updateProducts(data.categoryArticles.articles);
    updateCategoryType(data.name);
    updateProductCount(data.articleCount);
  }, [
    data,
    error,
    setError,
    updateCategories,
    updateProducts,
    updateCategoryType,
    updateProductCount,
  ]);

  return (
    <DefaultLayout loading={loading}>
      <ProductCardList />
    </DefaultLayout>
  );
};

export default Home;
