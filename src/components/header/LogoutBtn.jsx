import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import {authService} from '../../appwrite/auth'
import {logout} from '../../store/storeSlice'
const LogoutBtn = () => {
    
    let dispatch=useDispatch()
    let handleClick=()=>{
        authService.logoutAccount().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <Button onClick={handleClick} children='logout' bgColor='red-600' className='px-2 py-1 rounded-md'/>
      
    
  )
}

export default LogoutBtn