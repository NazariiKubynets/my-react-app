
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter'
import { AuthContext } from './context'
import Navbar from './UI/Navbar/Navbar'

const PostsOne = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('auth'))
        setIsAuth(true);
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default PostsOne
