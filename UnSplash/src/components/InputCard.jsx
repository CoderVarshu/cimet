/* eslint-disable react/prop-types */
import { useState } from "react";

const InputCard = ({handleSearch}) => {
  const [query, setQuery] = useState("");
  const [isRandom, setIsRandom] = useState(false);
  const [orientation, setOrientation] = useState("landscape");
  const [limit, setLimit] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState('1')

  const handleSubmit =(e)=>{
    e.preventDefault()
      handleSearch({query, isRandom, orientation, limit, page})
  }
  return (
    <form 
    >
    <div className="flex justify-center flex-col h-96  gap-4 items-center">
         <div className="w-1/2">
        <input
          type="checkbox"
          checked={isRandom}
          onChange={() => setIsRandom(!isRandom)}
        />
         <label className="ml-2">Get Random</label>
      </div>
      <div className="w-1/2">
        <label>Search</label>
        <input
          type="text"
          value={query}
          disabled={isRandom}
          onChange={(e) => setQuery(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search Image"
          required={!isRandom}
        />
      </div>
      <div className="w-1/2">
        <label>Select Orientation</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
      </div>
      <div className="w-1/2">
        <label>Limit</label>
        <input
        // disabled={isRandom}
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
          required
        />
      </div>
     
      <button className="bg-gray-800 px-5 py-1 rounded-md text-white" onClick={handleSubmit}>
        Generate Image
      </button>
    </div>
    </form>
  )
};

export default InputCard;
