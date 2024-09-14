import { apiSlice } from "../api/apiSlice";

export const affiliationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAffiliation: builder.mutation({
      query: (data) => ({
        url: "Affiliation/create",
        method: "POST",
        body: data,
        credentials: "include" as const
      })
    }),
    getAllAffiliations: builder.query({
      query: () => ({
        url: "get-admin-Affiliation",
        method: "GET",
        credentials: "include" as const
      })
    }),
    editAffiliation: builder.mutation({
      query: ({ id, data }) => ({
        url: `Affiliation/update/${id}`,
        method: "PUT",
        body:data,
        credentials: "include" as const
      })
    }),
    countAffiliation: builder.mutation({
      query: ({ id, data }) => ({
        url: `Affiliation/update/${id}`,
        method: "PUT",
        body:data,
        credentials: "include" as const
      })
    }),
    deleteAffiliation: builder.mutation({
      query: (id) => ({
        url: `delete-Affiliation/${id}`,
        method: "DELETE",
        credentials: "include" as const
      })
    })
  })
});

export const {
  useCreateAffiliationMutation,
  useGetAllAffiliationsQuery,
  useDeleteAffiliationMutation,
  useEditAffiliationMutation
} = affiliationsApi;
