import { apiSlice } from "../api/apiSlice";

export const goodiesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGoodie: builder.mutation({
      query: (data) => ({
        url: "goodie/create",
        method: "POST",
        body: data,
        credentials: "include" as const
      })
    })
  })
});

export const { useCreateGoodieMutation } = goodiesApi;
