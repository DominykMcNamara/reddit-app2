import React, { useEffect } from 'react'
import { useGetPostCommentsQuery } from '../../app/redditApi'
import { Comment } from './Comment'
export const CommentList = ({permalink}) => {
    const {data, isLoading, error} = useGetPostCommentsQuery(permalink)
    
    useEffect(() => console.log(data))

    let content;
    if (isLoading) {
        content = <h1>Loading...</h1>
    } else if ( data ) {
        content =  data[1].data.children.map(comment => (
            <ul key={comment.data.id}>
                <Comment comment={comment.data} />
            </ul>
        ) )
    } else {
        content = <h1>{error}</h1>
    }
  return (
    <div>
        {content}
    </div>
  )
}
