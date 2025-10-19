import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './UI/PostItem'
import './Style/StylesGroup.css'

const PostList = ({ posts, remove }) => {

  if (!posts.length)
    return <h1 style={{textAlign: 'center'}}>Posts are not found!</h1>

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Posts list</h1>
      <TransitionGroup>
        {
          posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              classNames='post'
              timeout={500}
            >
              <PostItem post={post} number={index + 1} remove={remove} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </div>
  )
}

export default PostList
