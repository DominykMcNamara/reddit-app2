import React, { useEffect } from 'react'
import { useGetPostCommentsQuery } from '../../app/redditApi'
export const CommentList = ({permalink}) => {
    const {data, isLoading, error} = useGetPostCommentsQuery(permalink)

    useEffect(() => console.log(data[1].data.children))

    let content;
    if (isLoading) {
        content = <h1>Loading...</h1>
    } else if (data) {
        content = data[1].data.children.map(comment => <h1>{comment.data.id}</h1>)
    } else {
        content = <h1>{error}</h1>
    }
  return (
    <div>
        {content}
    </div>
  )
}
