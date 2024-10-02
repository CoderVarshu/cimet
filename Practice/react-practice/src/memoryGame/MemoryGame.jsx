import { useEffect, useState } from "react";
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
  const [flippedArr, setFlippedArr] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [dataArr, setDataArr] = useState([]);
  const [turn, setTurn] = useState(0);
  const [turnOne, setTurnOne] = useState(null);
  const [turnTwo, setTurnTwo] = useState(null);
  const [score, setScore] = useState(0)

  const data = [
    {
      name: "white",
      id: 1,
      image: whiteBird,
    },
    {
      name: "blackBird",
      id: 2,
      image: blackBird,
    },
    {
      name: "dualBird",
      id: 3,
      image: dualBird,
    },
    {
      name: "blueBird",
      id: 4,
      image: blueBird,
    },
    {
      name: "orangeBird",
      id: 5,
      image: orangeBird,
    },
    {
      name: "apple",
      id: 6,
      image: apple,
    },
  ];

  useEffect(() => {
    const duplicateArr = [
      ...data,
      ...data.map((el) => ({ ...el, id: el.id + 6 })),
    ];
    const shuffledArray = duplicateArr.sort(() => Math.random() - 0.5);
    setDataArr(shuffledArray);
  }, []);

  const handleFlip = (card) => {
      turnOne ? setTurnTwo(card) : setTurnOne(card);
      setTurn((prev) => prev + 1);
      handleCheck();
  };

  useEffect(() => {
   
       if(turnOne && turnTwo) {
        if(turnOne.name === turnTwo.name){
            // setScore((prev)=> prev+1)
            // handleReset()
        }
        else{
            // handleReset()
        }
       }

  }, [turnOne, turnTwo]);

  const handleCheck = () => {
    if (turnOne && turnTwo) {
      if (turnOne.name === turnTwo.name) {
        console.log("Matches");
         handleReset();
      } else {
        console.log("Not Matches");
         handleReset();
      }
     
    }
  };

  const handleReset = () => {
    setTurnOne([]);
    setTurnTwo([]);
  };

  return (
    <div className="card-grid">
      {/* <Count /> */}
     Score : {score}
     Clicked: {turn}
      {dataArr?.map((item, i) => {
        return <View key={item.id} data={item} handleFlip={handleFlip} />;
      })}
    </div>
  );
};

export default MemoryGame;
