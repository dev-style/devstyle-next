import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "order/all",
        method: "GET",
        credentials: "include" as const
      })
    }),
    editOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `order/update/${id}`,
        method: "PUT",
        body:data,
        credentials: "include" as const
      })
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `order/delete/${id}`,
        method: "DELETE",
        credentials: "include" as const
      })
    })
  })
});

export const {useEditOrderMutation, useGetAllOrdersQuery, useDeleteOrderMutation } = orderApi;
