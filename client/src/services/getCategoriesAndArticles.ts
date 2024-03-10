import api from "../api/api";
import { API_BASE_URL } from "../constants/config";
import { Category } from "../types/types";

export type GraphQLResponse = {
  data: {
    categories: Category[];
  };
}

export const getCategoriesAndArticles = async (): Promise<Category> => {
  try {
    const response = await api<GraphQLResponse>(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          categories: productLists(ids: "156126", locale: de_DE) {
            name
            articleCount
            childrenCategories: childrenProductLists {
              list {
                name
                urlPath
              }
            }
            categoryArticles: articlesList(first: 100) {
              articles {
                name
                variantName
                prices {
                  currency
                  regular {
                    value
                  }
                }
                images(
                  format: WEBP
                  maxWidth: 200
                  maxHeight: 200
                  limit: 1
                ) {
                  path
                }
              }
            }
          }
        }`,
      }),
    });

    if (!response.data) {
      throw new Error("No response from api");
    }

    if (response.data.categories?.length > 0) {
      return response.data.categories[0];
    }

    throw new Error("No categories found");
  } catch (error) {
    console.error("Error while fetching data", error);
    throw error;
  }
};
