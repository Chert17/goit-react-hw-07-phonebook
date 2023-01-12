import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63c05661e262345656fd14b2.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: name => {
        let params = '';
        if (name?.length > 0) {
          params = `/?name=${name}`;
        }
        return `/contacts${params}`;
      },
      providesTags: result =>
        result ? result.map(({ id }) => ({ type: 'Contacts', id })) : [],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
