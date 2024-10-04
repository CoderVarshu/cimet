import { useState } from "react"

const AgeCalculator = () => {

    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState(0)

   const handleCalculateAge=()=>{
          const currentDate = new Date()
          const birthDate = new Date(birthDate)
   }

  return (
    <div>
        <input type="date" value={birthDate} />
        <button onClick={handleCalculateAge}>
            Calculate
        </button>
    </div>
  )
}

export default AgeCalculator