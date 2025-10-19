import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Posts from '../pages/Posts'
import { privateRoutes, publicRoutes } from '../Routs/Routs'


const AppRouter = () => {
   const {isAuth} = useContext(AuthContext);

   return (
      isAuth ?
         <Routes>
            {privateRoutes.map(el =>
               <Route key={el} path={el.path} element={el.component} />
            )}
            <Route path="*" element={<Posts />} />
         </Routes>
         :
         <Routes>
            {publicRoutes.map(eld =>
               <Route key={eld} path={eld.path} element={eld.component} />
            )}
            <Route path="*" element={<Login />} />
         </Routes>
   )
}

export default AppRouter
