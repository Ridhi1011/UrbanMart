import { apiSlice } from './apiSlice';

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: '/api/cart',
      }),
      keepUnusedDataFor: 5,
    }),
    syncCart: builder.mutation({
      query: (data) => ({
        url: '/api/cart',
        method: 'POST',
        body: data,
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: '/api/cart',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetCartQuery, useSyncCartMutation, useClearCartMutation } = cartApiSlice;
