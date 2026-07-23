import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../Container'
import Index from '../Index'
import { useId } from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
const Header = () => {
  let dispatch=useDispatch()
  let id = useId()
  let authenticated=useSelector((state)=>state.authenticated)
  let navigate=useNavigate()
  let navItems=[
    {
      name:"home",
      slug:"/home",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authenticated

    },
    {
      name:"signup",
      slug:"/signup",
      active:!authenticated
    },
    {
      name:"All posts",
      slug:"/all-posts",
      active:authenticated
      
    },
    {
      name:"Add post",
      slug:"/add-post",
      active:authenticated
      }
  ]


  return (
   <Container>
    <div className="left">
      <Logo value={{className:'h-[100px] rounded-full object-cover'}}/>
    </div>
    <div className="right">
      <ul>
        {navItems.map((item,idx)=>(
          item.active?(
            <li key={idx}>
              <Link to={`${item.slug}`}>{item.name}</Link>
            </li>
          ):null
        ))}
        {true && (
          <li>
            <LogoutBtn/>
          </li>
        )}
      </ul>
    </div>
   </Container>
  )
}

export default Header