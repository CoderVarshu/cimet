import { useLoaderData } from "react-router-dom"

const Home = () => {

  const data = useLoaderData()

  console.log("DATA", data)

  return (
    <div>Home</div>
  )
}

export default Home