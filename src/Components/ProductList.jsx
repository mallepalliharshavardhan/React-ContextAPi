import ProductCard from './ProductCard'
export default function ProductList({products}){
    return(
        <>
        {
          products.map(item=>
             
             <ProductCard product={item} key={item.id}/>
          )
        }
        </>
    )
}