/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import './Products.css'


const Products = () => {
    const {products} = useLoaderData()
    console.log(products)


   
    return (
        <div >
            <div>This is a About section</div>
           <div className="productsStyle">
           {
                products.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
            }
           </div>
        </div>
    );
};

export default Products;