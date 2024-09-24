/* eslint-disable react/prop-types */


const DotsComponents = ({ dotsList,handleCreateDot, }) => {

  return (
    <div style={{height:'100vh', width:'100%'}} onClick={handleCreateDot}>
      {dotsList.map((item, i) => (
        <div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            left: `${item.X}px`,
            top: `${item.Y}px`,
            backgroundColor: `${item.bgColor}`,
            borderRadius:'50%'
          }}
        ></div>
      ))}
    </div>
  );
};

export default DotsComponents;
