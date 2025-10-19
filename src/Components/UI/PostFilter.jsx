import React from 'react'
import MyInput from './input/MyInput'
import MySelect from './select/MySelect'



const PostFilter = ({ filter, setFilter }) => {

   return (
      <div>
        <MyInput onChange={e => setFilter({...filter, query: e.target.value})} value={filter.query} type='text' placeholder="Query search..." />
        <MySelect
        value={filter.sorted}
        defaultValue="Type sort posts"
        onChange={sort => setFilter({...filter, sorted: sort})}
        options={[{value: 'title', name: 'Sort title'},
                  {value: 'body', name: 'Sort description'}]}
        />
      </div>
   )
}

export default PostFilter
