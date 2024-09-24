/* eslint-disable react/prop-types */

const ListAvatars = ({ avatarList, handleDelete }) => {

   
    return (
        <div >
            <ul style={{ display: 'flex' }}>
                {avatarList && avatarList?.map((item) =>
                    
                        <span
                            style={{
                                backgroundColor: item.backgroundColor,
                                color: item.textColor,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '5px',
                                borderRadius: '100%',
                                height: '50px',
                                width: '50px',
                                fontSize: '1.5em',
                                margin: '0px 5px',
                                 position: 'relative'
                            }}
                            key={item.id}>
                            {item.name?.charAt(0).toUpperCase()}
                            <span key={item.id}
                            onClick={()=>handleDelete(item.id)}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               position:'absolute',
                                top: '-25%',
                                left: '55%',
                                borderRadius: '50%',
                                height: '20px',
                                width: '20px',
                                padding: '5px',
                                fontSize: '20px',
                                background: '#f2f2f2',
                                color:'#000',
                                cursor:'pointer',
                            }}>
                            &times;
                        </span>
                        </span>
                        
                    
                )}
            </ul>
        </div>
    )
}

export default ListAvatars