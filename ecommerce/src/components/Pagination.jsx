
const Pagination = ({start, setStart}) => {

  const arr = new Array(10).fill(0).map((el,i)=> el = i + 1)
  console.log(arr)

  return (
    <div>
       <button className="border px-2 mx-1 bg-blue-gray-300"
         disabled={start === 0 }
         style={{cursor: start === 0 ? "not-allowed": "pointer", backgroundColor: start === 0 ?  "gray": "pink"   }}
         onClick={()=> setStart(prev=> prev - 10)}
       >
        prev
       </button>
       {arr.map((el)=><button className= "border px-2 mx-1 bg-blue-gray-300"
          disabled={(start /10 + 1) === el }
          style={{ cursor: ((start /10) + 1) === el ? "not-allowed": "pointer", backgroundColor: ((start /10) + 1) === el  ?  "gray": "pink"  }}
         onClick={()=> setStart((el -1) * 10)}>
        {el}
        </button>)}
       <button className="border px-2 mx-1 bg-blue-gray-300" 
       onClick={()=> setStart((prev)=> prev + 10)}
        disabled={start+10 === 100 }
        style={{cursor: start+10 === 100  ?  "not-allowed": "pointer", backgroundColor: start+10 === 100  ?  "gray": "pink"   }}
       >
        next
       </button>
    </div>
  )
}

export default Pagination