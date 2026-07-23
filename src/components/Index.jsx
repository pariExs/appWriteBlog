import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
const Index = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
        </div>
  )
}

export default Index