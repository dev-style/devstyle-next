import { apiSlice } from "../api/apiSlice";

export const sizeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSizes: builder.query({
      query: () => ({
        url: "size/all",
        method: "GET",
        credentials: "include" as const
      })
    })
  })
});

export const { useGetSizesQuery } = sizeApi;
