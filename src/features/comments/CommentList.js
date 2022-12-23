import React, { useEffect } from 'react'
import { useGetPostCommentsQuery } from '../../app/redditApi'
import { Comment } from './Comment'
export const CommentList = ({permalink}) => {
    const {data, isLoading, error} = useGetPostCommentsQuery(permalink)
    
    useEffect(() => console.log(data))

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if ( data ) {
        content =  data[1].data.children.map(comment => (
            <ul key={comment.data.id}>
                <Comment comment={comment.data} />
            </ul>
        ) )
    } else {
        content = <p>{error}</p>
    }
  return (
    <div>
        {content}
    </div>
  )
}
