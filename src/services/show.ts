import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api } from '../config/constant'
import { PeoplesResponse, SearchShowsResponse, ShowsResponse } from './types'

export const tvShowApi = createApi({
    reducerPath: 'showApi',
    baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
    endpoints: (builder) => ({
      getTvShowByPage: builder.query<ShowsResponse, number>({
        query: (page) => `shows?page=${page}`,
      }),
      searchShowByName: builder.query<SearchShowsResponse, string>({
        query: (name) => `search/shows?q=${name}`,
      }),
      searchPeopleByName: builder.query<PeoplesResponse, string>({
        query: (name) => `search/people?q=${name}`,
      }),
    }),
})