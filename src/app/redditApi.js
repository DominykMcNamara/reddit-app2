import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const redditApi = createApi({
    reducerPath: 'redditApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'r/popular.json'
        }),
        getPostComments: builder.query({
            query: permalink => `${permalink}.json`
        })
    })
})

export const {useGetPostsQuery, useGetPostCommentsQuery} = redditApi