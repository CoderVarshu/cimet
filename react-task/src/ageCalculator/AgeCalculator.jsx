import { useState } from "react"
import './style.css';

const AgeCalculator = () => {

  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(0)
  const [showError, setShowError] = useState(false)
  const [showUses, setShowUses] = useState(false)

  const handleCalculateAge = () => {
    if (!birthDate) {
      setShowError(true)
    }
    else {
      const currentDate = new Date()
      const newBirthDate = new Date(birthDate)

      let age = currentDate.getFullYear() - newBirthDate.getFullYear();
      const monthDifference = currentDate.getMonth() - newBirthDate.getMonth();
      const dayDifference = currentDate.getDate() - newBirthDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 || dayDifference < 0)) {
        age--;
      }
      setAge(age)
    }
  }

  const disableDate = new Date().toISOString().split('T')[0]



  return (
    <div className="wrapper">
      <div className="card">
        {!age ? (
          <div style={{ padding: '20px' }}>
            <div>  <h3>Find out if are eligible to use our service! </h3></div>
            <label>What is your date of birth?</label>
            <div style={{ margin: '15px 0px ' }}>
              <input
                type="date"
                max={disableDate}
                value={birthDate}
                onChange={(e) => {
                  setShowError(false)
                  setBirthDate(e.target.value)
                }}
                className="input-wrapper"
              />
              {showError ? <div style={{ color: 'red' }}> Date of birth is required field </div> : ''}
            </div>
            <div>
              <button onClick={handleCalculateAge} className="check-btn">
                Calculate
              </button>
            </div>
            <div className="uses-text"
              onClick={() => setShowUses(!showUses)}>
              why do we need to know this?
            </div>
             {showUses ? <div style={{border:'1px solid #afaf0ffc', margin:'10px', padding:'5px'}}> Your Date of birth determines if you can use our platform. you must be at least 18 years old to use our services
              </div> : '' }
          </div>
        ) : (
          <div className="result-text">
            {age >= 18 ? `You are ${age} years you are eligible` : "You are under 18 which means you are not eligible"}
            <div  style={{
              textDecoration: 'underline',
              color: 'yellow',
              cursor: 'pointer'
            }}
            onClick={()=>{setAge(0)
              setBirthDate('')
            }}
            > Go Back </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default AgeCalculator