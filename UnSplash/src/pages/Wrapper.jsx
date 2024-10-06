import { useEffect, useState } from "react";
import InputCard from "../components/InputCard";
import { fetchApi } from "../services/Api";
import Carousel from "../components/Carousel";

const Wrapper = () => {
  const [images, setImages] = useState(localStorage.getItem('images')? JSON.parse(localStorage.getItem('images')) : []);
  const [pages, setPages] = useState(0)


  const handleFetchImages = async(value) => {
    const { data, totalPage } = await fetchApi(value);
    console.log("DATA", data)
    setImages(data)
    setPages(totalPage)
    localStorage.setItem('images', JSON.stringify(data))
  };

  useEffect(()=>{

     console.log("Images", images)
  }, [images])

  return (
    <div>
      <InputCard handleSearch={handleFetchImages} />
      {images.length > 0 && 
      <div className="w-[80%] m-auto pt-11 mb-14">
        <Carousel images={images} pages={pages} />
        </div>
      }
    </div>
  ); 
};

export default Wrapper;
