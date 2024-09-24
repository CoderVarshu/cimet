/* eslint-disable react/prop-types */


const AddAvatar = ({setShowForm}) => {
  return (
    <div 
    style={{width:'40px',
            height:'40px',
           //  padding:'15px',
            display:'flex',
            justifyContent:'center' ,
            background:'#f2f2f2',
            borderRadius:'50%',
            fontSize:'2em',
           fontWeight:700,
            alignItems:'flex-end',
            cursor:'pointer',

    }}
  onClick={()=>setShowForm(true)} >
    +
  </div>
  )
}

export default AddAvatar