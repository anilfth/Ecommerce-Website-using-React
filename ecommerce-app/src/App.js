import React from 'react'
import {BrowserRouter as Router, Routes, Route } from  "react-router-dom"
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import ErrorPage from './ErrorPage'
import {GlobalStyle} from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
function App() {
  const theme = {
    colors: {
      bg: "#000",
    },
  }
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" elements={<Home />} /> 
        <Route path='About' element={<About />} />
        <Route path='product' element={<Product/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='singleproduct/:id' element={<SingleProduct/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App

