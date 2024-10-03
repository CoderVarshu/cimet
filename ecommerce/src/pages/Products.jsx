import { useLoaderData } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Products = () => {

  const data = useLoaderData()

  return (
    <div className="flex flex-wrap justify-center">
      {data?.map((item)=>{
        return(
          <ProductCard data={item} key={item.id}/>
        )
      })}
    </div>
  )
}

export default Products