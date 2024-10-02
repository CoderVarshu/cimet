import { useEffect, useRef, useState } from "react";
import blackBird from "./imges/BlackBird.png";
import blueBird from "./imges/blueBird.png";
import dualBird from "./imges/dualBirds.png";
import orangeBird from "./imges/orangeBird.png";
import whiteBird from "./imges/whiteBird.png";
import banana from "./imges/banana.png";
import apple from "./imges/apple.png";
import "./style.css";
import View from "./view";
import Count from "./Count";

const MemoryGame = () => {
  const [disabled, setDisabled] = useState(false)
  const [dataArr, setDataArr] = useState([]);
  const [turn, setTurn] = useState(0);
  const [turnOne, setTurnOne] = useState(null);
  const [turnTwo, setTurnTwo] = useState(null);
  const [score, setScore] = useState(0)
  const [attempt, setAttempt] = useState(0)
  const [count, setCount] = useState(60)
  const timeRef = useRef(null)

  const data = [
    {
      name: "white",
      id: 1,
      image: whiteBird,
      matches: false,
    },
    {
      name: "blackBird",
      id: 2,
      image: blackBird,
      matches: false,
    },
    {
      name: "dualBird",
      id: 3,
      image: dualBird,
      matches: false,
    },
    {
      name: "blueBird",
      id: 4,
      image: blueBird,
      matches: false,
    },
    {
      name: "orangeBird",
      id: 5,
      image: orangeBird,
      matches: false,
    },
    {
      name: "apple",
      id: 6,
      image: apple,
      matches: false,
    },
  ];

  const startGame = () => {
    const duplicateArr = [
      ...data,
      ...data.map((el) => ({ ...el, id: el.id + 6 })),
    ];
    const shuffledArray = duplicateArr.sort(() => Math.random() - 0.5);
    setDataArr(shuffledArray);
    setScore(0)
    setTurn(0)
    setAttempt(0)
    setCount(60)
  }



  const endGame = () => {
    setDataArr([])
    clearInterval(timeRef.current)
   
  }

  const handleFlip = (card) => {
    if (turnOne) {
      setTurnTwo(card)
      setDataArr(dataArr.map((el) => el.id == card.id ? { ...el, matches: true } : el))
    }
    else {
      setTurnOne(card)
      setDataArr(dataArr.map((el) => el.id == card.id ? { ...el, matches: true } : el))
    }
    setTurn((prev) => prev + 1);
  };

useEffect(()=>{
   if(!count){
    setDataArr([])
   }

},[count])

  useEffect(() => {

    if (turnOne && turnTwo) {
      setDisabled(true)
      if (turnOne.name === turnTwo.name) {
        // setDataArr( (card) => card.map((el) => el.name == turnOne.name ? { ...el, matches: true } : el))
        setScore((prev) => prev + 1)
        handleReset()
      }
      else {
        setTimeout(() => {
          setDataArr(dataArr.map((card) => card.id == turnTwo.id || card.id == turnOne.id ? { ...card, matches: false } : card))
          handleReset()
        }, 1000)
      }
    }
  }, [turnOne, turnTwo]);


  const handleReset = () => {
    setTurnOne(null);
    setTurnTwo(null);
    setDisabled(false)
    setAttempt((prev) => prev + 1)
  };


  return (
    <div style={{display:'flex', justifyContent:"center",  }}>
      <div >
        <button onClick={startGame}>{!dataArr?.length? "Start" : 'ReStart' } </button>
       
       <div className="headerInfo">
         <div> <Count count={count} setCount={setCount} timeRef={timeRef} /></div>
         <p> Score : {score}</p>
          {' '}
         <p> Clicked: {turn}</p>
          {''}
          <p>Attempt: {attempt}</p>
          <button onClick={endGame}>End</button>
        </div>
        <div className="card-grid">
          {dataArr?.map((item, i) => {
            return <View
              key={item.id}
              data={item}
              handleFlip={handleFlip}
              disabled={disabled}
            //  flipped={item === turnOne || item === turnTwo ||  item.macted}
            />;
          })}
        </div>
      </div>

    </div>
  );
};

export default MemoryGame;
