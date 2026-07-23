import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthLoyout = ({authentication=true,children}) => {  
    const [loader, setLoader] = useState(true)

    let navigate=useNavigate()
    let authStatus=useSelector((state)=>state.authentication)
    
    useEffect(() => {

        /*
        if(authStatus){
        navigate("/")
        }else{
            navigate("/login")}
        */
        if(authentication && authStatus!=authentication){
            navigate("/")
        }else if (!authentication && authStatus!=authentication){
            navigate("/login")
        }
    
    }, [authStatus,navigate,authentication])
    
    return 
    loader?<p>loading</p>:<div>{children}</div>
}

export default AuthLoyout