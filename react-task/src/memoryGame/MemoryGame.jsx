import React, { useEffect, useState } from 'react'
import blackBird from './imges/BlackBird.png'
import blueBird from './imges/blueBird.png';
import dualBird from './imges/dualBirds.png'
import orangeBird from './imges/orangeBird.png'
import whiteBird from './imges/whiteBird.png'
import banana from './imges/banana.png'
import apple from './imges/apple.png'
import './style.css';
import View from './view';
import Count from './Count';


const MemoryGame = () => {
    const [flippedArr, setFlippedArr] = useState([])
    const [isFlipped, setIsFlipped] = useState(false)
    const [dataArr, setDataArr] = useState([])

    const data = [
        {
            name: 'white',
            id: 1,
            image: whiteBird
        },
        {
            name: 'banana',
            id: 2,
            image: banana
        },
        {
            name: 'dualBird',
            id: 3,
            image: dualBird
        },
        {
            name: 'blueBird',
            id: 4,
            image: blueBird
        },
        {
            name: 'orangeBird',
            id: 5,
            image: orangeBird
        },
        {
            name: 'apple',
            id: 6,
            image: apple
        },
    ]

    useEffect(()=>{
        const duplicateArr = [...data, ...data.map((el)=>{})]
        const shuffledArray = duplicateArr.sort(() => Math.random() - 0.5);
        setDataArr(shuffledArray)
    }, [])


    const handleFlip = (id) => {
        console.log("i am running")
        setFlippedArr([...flippedArr, id])
    }

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px', width: '80%', justifyContent: 'center', }}>
            {/* <Count /> */}
            {dataArr?.map((item, i) => {
                return (
                    <View key={i} data={item} id={i} handleFlip={handleFlip} flippedArr={flippedArr} />
                )
            })}
        </div>
    )
}

export default MemoryGame