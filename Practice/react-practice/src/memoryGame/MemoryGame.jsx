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
  const [flippedCards, setFlippedCard] = useState([]);
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

  useEffect(() => {
    const duplicateArr = [
      ...data,
      ...data.map((el) => ({ ...el, id: el.id + 6 })),
    ];
    const shuffledArray = duplicateArr.sort(() => Math.random() - 0.5);
    setDataArr(shuffledArray);
  }, []);

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

  useEffect(() => {

    if (turnOne && turnTwo) {
      if (turnOne.name === turnTwo.name) {
        setScore((prev) => prev + 1)
        handleReset()
      }
      else {
        setDataArr(dataArr.map((card) => card.id == turnTwo.id || card.name == turnOne.id ? { ...card, matches: false } : card))

        handleReset()

      }
    }

  }, [turnOne, turnTwo]);
  console.log("else in useEffect", dataArr)
  const handleReset = () => {
    setTurnOne(null);
    setTurnTwo(null);
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
