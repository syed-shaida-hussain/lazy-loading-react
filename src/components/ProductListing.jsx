import axios from "axios"
import { useEffect, useState } from "react"

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const {data} = await axios.get("https://dummyjson.com/products")
        setProducts(data.products)
    }
    useEffect(() => {
        fetchProducts()
    },[])
  return (
    <div className="products-container">
        {
            products.map((product) => <div key={product?.id} className="product-card" >
                <h3>{product.title}</h3>
                <img  src={product.thumbnail} alt={product.title}/>
                <p>{product.description}</p>
            </div>)
        }
    </div>
  )
}

export default ProductListing
