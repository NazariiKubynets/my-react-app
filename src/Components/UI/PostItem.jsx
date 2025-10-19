import React from 'react'
import {useNavigate} from 'react-router-dom'
import MyButton from './button/MyButton'
import s from "./PostItem.module.css"

const PostItem = (props) => {

  const router = useNavigate()
  return (
    <div className={s.post}>
      <div>
        <div className={s.item}>{props.post.id}. {props.post.title}</div>
        <div>{props.post.body}</div>
      </div>
      <div>
        <MyButton onClick={()=> router(`/posts/${props.post.id}`)} >Open</MyButton>
        <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  )
}

export default PostItem
