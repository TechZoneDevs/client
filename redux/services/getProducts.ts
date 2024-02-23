import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
    id: number
    name: string
    price: number
    imgs: string[]
    vendedorId: number
    marca: string
    status: string
    description: string
    stock: number
    descuento: number
    idLocation: number
    idCategory: number
};

export const productGet = createApi({
  reducerPath: "productGet",
  refetchOnFocus: true, 
  baseQuery: fetchBaseQuery({
    baseUrl: "/product", 
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "product",
    }),
    getProductById: builder.query<Product, { id: string }>({
      query: ({ id }) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productGet;