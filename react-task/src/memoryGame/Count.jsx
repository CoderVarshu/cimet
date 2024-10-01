import { useEffect, useState } from "react";

const Count = () => {

  const [count, setCount] = useState(60)
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
}, []);

  return (
    <div>{count}</div>
  )
}

export default Count