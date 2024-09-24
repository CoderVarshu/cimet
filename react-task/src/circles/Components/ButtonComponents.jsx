/* eslint-disable react/prop-types */

import '../Styles/style.css';

const ButtonComponents = ({updatedDotsArray, dotsList, handleReset, handleUndo,handleRedo }) => {
  return (
    
      <div>
        {console.log("Dots Length",dotsList.length, dotsList.length === 0)}
        <button className={dotsList.length === 0 ? 'disabled'  :"reset-btn"}
         disabled={dotsList.length === 0}
          onClick={handleReset}
         >
            Reset
        </button>
        <button
         onClick={handleUndo}
        className={dotsList.length === 0 ?'disabled': 'undo-btn'} disabled={dotsList.length === 0 }>
            Undo
        </button>
        <button
         onClick={handleRedo}
        className={ updatedDotsArray.length === 0 ? 'disabled' : 'redo-btn'} disabled={updatedDotsArray.length === 0 } >
            Redo
        </button>
    </div>
  )
}

export default ButtonComponents