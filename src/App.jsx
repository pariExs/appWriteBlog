import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login,logout } from './store/storeSlice'
import { authService } from './appwrite/auth'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/index'
import Index from './components/Index'
const App = () => {

  let dispatch=useDispatch()
  let userData=useSelector((state)=>state.userData)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
 
  }, [])
  
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Home/>} />

        
      </Routes>
    </div>
  )
}

export default App