import React, { useState } from 'react'
import '../style/style.css';

const AutoComplete = () => {

    const suggestions = ['@ybl', '@okicici', '@apl', '@yapl', '@rapl', '@axisb', '@idfcbank']
    const [upi, setUpi] = useState('')
    const [newSuggestion, setNewSuggestion] = useState([])

    const handleDropDown = (e) => {
        const value = e.target.value
        if (value.includes('@')) {
            const newValue = value.split('@')[1]
            const getSuggestion = suggestions.filter((item) => (item.includes('@' + newValue)))
            setNewSuggestion(getSuggestion)
        }
        else {
            setNewSuggestion([])
        }
    }



    return (
        <div>
            <input
                autoFocus   
                name={upi}
                onChange={(e) => setUpi(e.target.value)}
                onKeyUp={(e) => handleDropDown(e)}
            />
            <div className='sugestionDropDownWrapper'>
                {newSuggestion && newSuggestion.map((item, i) =>
                (
                    <div className='sugestionDropDown' key={i}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AutoComplete