import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.token;
      const value = JSON.parse(localStorage.getItem("user"));
      if (token || (value && value.token)) {
        headers.set("Authorization", `Bearer ${token || value.token}`);
      }
      return headers;
    },
  }),
  credentials: "include",
  endpoints: (builder) => ({
    loginWithAuth: builder.mutation({
      query: (payload) => ({
        url: "login",
        method: "POST",
        body: payload,
      }),
    }),
    createContact: builder.mutation({
      query: (newPost) => ({
        url: "contact",
        method: "POST",
        body: newPost,
      }),
    }),
    createSubscribe: builder.mutation({
      query: (payload) => ({
        url: "subscribe",
        method: "POST",
        body: payload,
      }),
    }),
    joinDeals: builder.mutation({
      query: (payload) => ({
        url: "/join_deals",
        method: "POST",
        body: payload,
      }),
    }),
    joinPlatforms: builder.mutation({
      query: (payload) => ({
        url: "/join_platforms",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginWithAuthMutation,
  useCreateContactMutation,
  useCreateSubscribeMutation,
  useJoinDealsMutation,
  useJoinPlatformsMutation,
} = api;
export default api;
