import { useRef, useState } from 'react'
import '../style/style.css';

const AutoComplete = () => {

    const suggestions = ["okaxis",
        "BARODAMPAY",
        "rbl",
        "upi",
        "allbank",
        "aubank",
        "axisbank",
        "bandhan",
        "indus",
        "kbl",
        "federal",
        "sbi",
        "yesbank",
        "citi",
        "citigold",
        "dlb",
        "dbs",
        "freecharge",
        "hsbc",
        "icici",
        "kotak",
        "paytm",
        "ybl",
        "okhdfcbank",
        "okicici",
        "oksbi",
        "axl",
        "ibl",
        "sib",]
    const [upi, setUpi] = useState('')
    const [newSuggestion, setNewSuggestion] = useState([])
    const [currentSuggestion, setCurrentSuggestion] = useState(-1)
    const [active, setActive] = useState(false)
    const currentRef = useRef(null)

    const handleText = (e) => {
        const value = e.target.value
        setUpi(value)
        setCurrentSuggestion(-1)
        if (value.includes('@')) {
            const newValue = value.split('@')
            const getSuggestion = suggestions.filter((item) => (item.toLowerCase().includes(newValue[1].toLowerCase())))
            setNewSuggestion(getSuggestion)
        }
        else {setNewSuggestion([])
            setActive(false)
        }
    }

    const handleDropDown = (e) => {
        const value = e.target.value
        if (value.includes('@')) {
            const check = value.split('@')
            setActive(true)
            if (e.key === 'Enter' || e.key==='ArrowRight') {
                if (currentSuggestion >= 0 && newSuggestion[currentSuggestion]) {
                    setUpi(`${check[0]}@${newSuggestion[currentSuggestion]}`);
                }
                else if (newSuggestion.length > 0) setUpi(check[0] + '@' + newSuggestion[0])
                setNewSuggestion([]);
                 setActive(false)
            }
            else if (e.key === 'ArrowDown') {
                if (currentSuggestion < newSuggestion.length - 1) {
                    const newIndex = currentSuggestion + 1;
                    setCurrentSuggestion(newIndex);
                    setUpi(`${check[0]}@${newSuggestion[newIndex]}`);
                }
            }
            else if (e.key === 'ArrowUp') {
                if (currentSuggestion > 0) {
                    const newIndex = currentSuggestion - 1;
                    setCurrentSuggestion(newIndex);
                    setUpi(`${check[0]}@${newSuggestion[newIndex]}`);
                }
            }
        }
          if(newSuggestion.length > 0) {currentRef.current.scrollIntoView(true)}
    }

    const handleSelect = (selectedText) => {
        const value = upi.split('@')
        setUpi(value[0] + '@' + selectedText)
        setCurrentSuggestion(-1)
        setNewSuggestion([])
    }

    return (
        <div className='upiBox'>
            <div className='inputContainer'>
                <input
                    placeholder='Enter UPI Id'
                    autoFocus
                    value={upi}
                    name={upi}
                    onChange={handleText}
                    onKeyUp={handleDropDown}
                    className='showInput'
                />
                <input 
                 value={active ? `${upi.split('@')[0]}@${ newSuggestion.length ? newSuggestion[0] :''}` :''}
                className='hiddenInput'
                disabled={true}
                />
            </div>
            <div className='sugestionDropDownWrapper'>
                {newSuggestion && newSuggestion.map((item, i) =>
                (
                    <ui
                        className={`sugestionDropDown ${i === currentSuggestion ? 'active' : ''}`}
                        key={i}
                        onClick={() => handleSelect(item)}
                       
                    >
                      <li key={i}  ref = {i === currentSuggestion? currentRef : null} >  {`@${item}`} </li>
                    </ui>
                ))}
            </div>
        </div>
    )
}

export default AutoComplete