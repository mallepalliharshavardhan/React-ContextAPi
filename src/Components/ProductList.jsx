import ProductCard from './ProductCard'
export default function ProductList({products}){
    return(
        <>
        <div className='flex flex-wrap'>
        {
          products.map(item=>
             
             <ProductCard product={item} key={item.id}/>
          )
        }
        </div>
        </>
    )
}