import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import CardList from "./pages/cardList"
import ProductList from "./pages/productList"
import ProductDetails from "./pages/productDetails"


function App() {
  
  return (
   <Fragment>
    <Routes>
     <Route path="/card-list" element={<CardList/>}/>
     <Route path="/product-details/:id" element={<ProductDetails/>}/>
     <Route path="/product-list" element={<ProductList/>}/>
    </Routes>
   </Fragment>
  )
}

export default App
