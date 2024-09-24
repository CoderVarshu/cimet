import { useState } from "react";
import ButtonComponents from "./ButtonComponents";
import DotsComponents from "./DotsComponents";


function DotApp() {

    const [dotsList, setDotsList] = useState([])
    const [updatedDotsArray, setUpdatedDotsArray] = useState([])
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
        "magenta",
        "lime",
      ];
    
    const handleCreateDot=(e)=> {

     let X = e.clientX;
     let Y = e.clientY;
     let bgColor = colors[Math.floor(Math.random() * colors.length)];
     setDotsList((prev)=> [...prev, { X,Y, bgColor}])
     
    }

    const handleReset=()=>{
        setDotsList([])
        setUpdatedDotsArray([])
    }

    const handleRedo=()=>{
       const getUndoDot = updatedDotsArray[updatedDotsArray.length - 1]
       setDotsList((prev) => [ ...prev, getUndoDot])
       setUpdatedDotsArray((prev) => prev.slice(0, -1) )
    }

    const handleUndo =()=>{
        if(dotsList.length > 0){
            console.log("UNdo")
            const getLastDot = dotsList[dotsList.length - 1]
             setDotsList((prev)=> prev.slice(0,-1))
             setUpdatedDotsArray((prev)=> [...prev, getLastDot])
        }
    }

    return(
        <>
        <ButtonComponents 
        handleReset={handleReset}
        handleRedo={handleRedo}
        handleUndo={handleUndo}
        updatedDotsArray={updatedDotsArray}
        dotsList={dotsList}
        setUpdatedDotsArray={setUpdatedDotsArray}
         />

            
        <DotsComponents
        handleCreateDot={handleCreateDot}
        dotsList={dotsList}
        
        />
        </>
    )
}

export default DotApp;