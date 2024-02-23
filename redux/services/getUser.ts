import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number
    name: string
    email: string
    password: string
    imgAvatar: string
    biografia: string
    status: boolean
    idLocation: number
};

export const userGet = createApi({
  reducerPath: "userGet",
  refetchOnFocus: true, 
  baseQuery: fetchBaseQuery({
    baseUrl: "/user", 
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "user",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `/user/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userGet;