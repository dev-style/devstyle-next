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
    }),
    getAllGoodies: builder.query({
      query: () => ({
        url: "get-admin-goodie",
        method: "GET",
        credentials: "include" as const
      })
    }),
    editGoodie: builder.mutation({
      query: ({ id, data }) => ({
        url: `goodie/update/${id}`,
        method: "PUT",
        body:data,
        credentials: "include" as const
      })
    }),
    deleteGoodie: builder.mutation({
      query: (id) => ({
        url: `delete-goodie/${id}`,
        method: "DELETE",
        credentials: "include" as const
      })
    })
  })
});

export const {
  useCreateGoodieMutation,
  useGetAllGoodiesQuery,
  useDeleteGoodieMutation,
  useEditGoodieMutation
} = goodiesApi;
