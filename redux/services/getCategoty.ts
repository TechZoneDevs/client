import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Category = {
    id: number
    name: string 
};

export const categoryGet = createApi({
  reducerPath: "categoryGet",
  refetchOnFocus: true, 
  baseQuery: fetchBaseQuery({
    baseUrl: "/category", 
  }),
  endpoints: (builder) => ({
    getcategorys: builder.query<Category[], null>({
      query: () => "category",
    }),
    getcategoryById: builder.query<Category, { id: string }>({
      query: ({ id }) => `/category/${id}`,
    }),
  }),
});

export const { useGetcategorysQuery, useGetcategoryByIdQuery } = categoryGet;