import './App.css'
import {Suspense, lazy } from 'react'
const ProductListing = lazy(() => 
  import("./components/ProductListing"));
function App() {
  return (
    <>
      <h1 className='heading'>Lazy loading using reactjs</h1>
      <Suspense fallback = {<div className='loader'>Loading....</div>}>
        <ProductListing />
      </Suspense>
    </>
  )
}

export default App
