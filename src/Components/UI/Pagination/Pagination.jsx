import React from 'react'
import { usePagination } from '../../hooks/usePagination';
import './Pagination.css';


const Pagination = ({ totalPage, page, changePage }) => {

  const pagesArray = usePagination(totalPage);

  return (
    <div className='content'>
      {pagesArray.map(p =>
        <button onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'} key={p}>{p}</button>
      )}
    </div>
  )
}

export default Pagination
