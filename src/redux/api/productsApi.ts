/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/create-product",
        method: "POST",
        data,
      }),
    }),

    getAllProducts: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/products/create-product",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any[], meta: any) => {
        return {
          products: response,
          meta,
        };
      },
    }),

    getAll: build.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),

    getProduct: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetAllQuery,
} = productsApi;
