import { apiSlice } from "../api/apiSlice";

export const collectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => ({
        url: "collection/all",
        method: "GET",
        credentials: "include" as const
      })
    })
  })
});

export const { useGetCollectionsQuery } = collectionApi;
