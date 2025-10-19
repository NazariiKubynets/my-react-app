import React, { useEffect, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import MyButton from '../UI/button/MyButton'
import MyModal from '../UI/MyModal/MyModal'
import Form from '../Form/Form'
import PostFilter from '../UI/PostFilter'
import PostList from '../PostList'
import Pagination from '../UI/Pagination/Pagination'
import Loader from '../UI/Loader/Loader'
import PostService from '../API/PostService'
import { usePagination } from '../hooks/usePagination'

const Posts = () => {

  // { id: 1, title: 'AJs', body: 'Vlanguage programming' },
  // { id: 2, title: 'DCss', body: 'Alanguage programming' },
  // { id: 3, title: 'BC+', body: 'Blanguage programming' }

  const [posts, setPosts] = useState([]);

  const [visibleModal, setVisibleModal] = useState(false);
  const [filter, setFilter] = useState([{ sorted: '', query: '' }]);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)

  const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  const queryAndSortPosts = usePosts(posts, filter.sorted, filter.query);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (post) => {
    setPosts([...posts, post]);
    setVisibleModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div>
      <MyButton style={{ marginLeft: '20px' }} onClick={() => setVisibleModal(true)}>Add post</MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <Form create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Error 404!</h1>
      }
      {isLoading
        ? <Loader />
        : <PostList remove={removePost} posts={queryAndSortPosts} />
      }
      <Pagination totalPage={totalPage} page={page} changePage={changePage} />
    </div >
  )
}

export default Posts
