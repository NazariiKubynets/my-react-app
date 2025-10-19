import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const Form = ({ create }) => {

  const [post, setPost]=useState({title: '', body: ''});

  const addPost=(e)=>{
    e.preventDefault();
    create({...post, id: Date.now()});
    setPost({title: '', body: ''});
  }

  return (
    <form>
      <MyInput onChange={e=> setPost({...post, title: e.target.value})} type='text' value={post.title} placeholder='Title'/>
      <MyInput onChange={e=> setPost({...post, body: e.target.value})} type='text' value={post.body} placeholder='Description'/>
      <MyButton onClick={addPost}>Add post</MyButton>
    </form>
  )
}

export default Form
