import { useState } from "react";
import InputCard from "../components/InputCard";
import { fetchApi } from "../services/Api";
import Carousel from "../components/Carousel";

const Wrapper = () => {
  const [images, setImages] = useState(localStorage.getItem('images')? JSON.parse(localStorage.getItem('images')) : []);
  const [pages, setPages] = useState(0)
  const [loading, setLoading] = useState(false)


  const handleFetchImages = async(value) => {
    setLoading(true)
    const { data, totalPage } = await fetchApi(value);
    setImages(data)
    setPages(totalPage)
    localStorage.setItem('images', JSON.stringify(data))
    setLoading(false)
  };

  return (
    <div>
      <InputCard handleSearch={handleFetchImages} />
      {!loading && images.length > 0 && 
      <div className="w-[80%] m-auto pt-11 mb-14">
        <Carousel images={images} pages={pages} />
        </div>
      }
      <div className="flex justify-center">
        {loading && "Loading... " }
      </div>
    </div>
  ); 
};

export default Wrapper;
