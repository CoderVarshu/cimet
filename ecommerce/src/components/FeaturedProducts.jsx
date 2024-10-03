import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
    const data = useLoaderData()
    console.log(data)

  return (
    <div>

        <div className="flex flex-wrap justify-center">
            {data.map((item)=>{
                return(
                    <ProductCard key={item.id} data={item} />
                )
            })}
        </div>
    </div>
  )
}

export default FeaturedProducts