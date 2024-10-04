import { useEffect } from "react";

const Count = ({count, setCount, timeRef}) => {


  useEffect(() => {
    timeRef.current = setInterval(() => {
      setCount(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(timeRef.current);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timeRef.current);
}, [count]);

  return (
    <div>{count}</div>
  )
}

export default Count