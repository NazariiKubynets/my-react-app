import { useDeferredValue, useMemo } from "react";


export const useSortPosts = (posts, sort) => {
   const sortPosts = useMemo(() => {
      if (sort)
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))

      return posts;
   }, [sort, posts])
   return sortPosts;
}

export const usePosts = (posts, sort, query) => {
   const sortedPosts = useSortPosts(posts, sort);
   
   const queryAndSortPosts = useMemo(() => {
      if(query)
      return sortedPosts.filter(post => post.title.includes(query))

      return sortedPosts;
   }, [query, sortedPosts])

   return queryAndSortPosts;
}