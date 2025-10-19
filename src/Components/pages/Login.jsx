import React, { useContext } from 'react'
import { AuthContext } from '../context'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={login}>
        <h1 style={{ textAlign: 'center' }}>Page login</h1>
        <MyInput type="text" placeholder='Enter login' />
        <MyInput type="password" placeholder='Enter password' />
        <MyButton >Enter</MyButton>
      </form>
    </div>
  )
}

export default Login
