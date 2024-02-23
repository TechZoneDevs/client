import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Locations = {
    id: number
    city: string
    localidad: string
};

export const locationsGet = createApi({
  reducerPath: "locationsGet",
  refetchOnFocus: true, 
  baseQuery: fetchBaseQuery({
    baseUrl: "/locations", 
  }),
  endpoints: (builder) => ({
    getlocationss: builder.query<Locations[], null>({
      query: () => "locations",
    }),
    getlocationsById: builder.query<Locations, { id: string }>({
      query: ({ id }) => `/locations/${id}`,
    }),
  }),
});

export const { useGetlocationssQuery, useGetlocationsByIdQuery } = locationsGet;