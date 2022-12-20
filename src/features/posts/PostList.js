import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useGetPostsQuery } from '../../app/redditApi'


export const PostList = () => {
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetPostsQuery()

   
        
    
    return (
        <div>
            Hello world
        </div>
    )
}