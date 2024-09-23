import React from 'react'
import { useState } from 'react'

const FormAvatar = ({handleSubmit,handleCancel, showForm }) => {

    const [inputName, setInputName] = useState('')

    return (
        <div style={{
            display: showForm ? 'block' : 'none',
            background:'#f2f2f2',
             padding:'10px',
             cursor:'pointer',
            }} >
                <div style={{
                display:'flex',
                justifyContent:'space-between',
                padding:'15px'
                }}>
                    <div>
                 Enter Name
                 </div>
                 <span onClick={handleCancel}>
                    &times;
                 </span>
                </div>
            <input type='text'
            style={{
                width:'200px',
                marginBottom:'10px',
                padding:'5px',
                border:'2px solid',
                borderRadius:'10px solid',
            }} 
            value={inputName} 
            onChange={(e) => setInputName(e.target.value)}
            autoFocus
            />
            <div 
            style={{display:'flex', justifyContent:'space-between',   
            }}>
            <button
              style={{background:'green', color:'white'}}
            onClick={()=> {
                handleSubmit(inputName)
                setInputName('')
            }}>
                Confirm
            </button>
            <button
             style={{
                background:'red', color:'white'}}
            onClick={(e)=>{
                e.preventDefault()
                handleCancel()}}>
                Cancel
            </button>
            </div>
        </div>
    )
}

export default FormAvatar