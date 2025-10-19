import React from 'react'
import s from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

  const addClasses = [s.myModal];

  if(visible)
    addClasses.push(s.active);

  return (
    <div className={addClasses.join(' ')} onClick={()=> setVisible(false)}>
      <div className={s.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal
