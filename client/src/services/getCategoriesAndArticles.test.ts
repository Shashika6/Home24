import {
  getCategoriesAndArticles,
  GraphQLResponse,
} from "./getCategoriesAndArticles";
import api from "../api/api";

jest.mock("../api/api");

describe("getCategoriesAndArticles", () => {
  const mockResponse = {
    data: {
      categories: [
        {
          name: "TestCategory",
          articleCount: 5,
          childrenCategories: {
            list: [
              {
                name: "Tables",
                urlPath: "table",
              },
              {
                name: "Chairs",
                urlPath: "chair",
              },
              {
                name: "Boxes",
                urlPath: "box",
              },
            ],
          },
          categoryArticles: {
            articles: [
              {
                name: "ArticleName",
                variantName: "VariantName",
                prices: {
                  currency: "USD",
                  regular: {
                    value: 1099,
                  },
                },
                images: [
                  {
                    path: "/image-path",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  };

  beforeEach(() => {
    
  });

  it("should fetch categories and articles successfully", async () => {
    (api as jest.Mock).mockResolvedValueOnce(mockResponse);
    const result = await getCategoriesAndArticles();

    expect(result).toEqual(mockResponse.data.categories[0]);
  });

  it("should throw an error if no categories found", async () => {
    const emptyResponse: GraphQLResponse = {
      data: {
        categories: [],
      },
    };

    (api as jest.Mock).mockResolvedValueOnce(emptyResponse);
    await expect(getCategoriesAndArticles()).rejects.toThrow(
      "No categories found"
    );
  });
});
