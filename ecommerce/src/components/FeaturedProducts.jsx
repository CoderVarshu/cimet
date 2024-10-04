import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
    const data = useLoaderData()

  return (
    <div>

        <div>
         <div className="flex justify-center text-black text-2xl mt-4">
            <h3>Featured Products</h3>
            </div>
         <div className="flex flex-wrap justify-center">
            {data.map((item)=>{
                return(
                    <ProductCard key={item.id} data={item} />
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts