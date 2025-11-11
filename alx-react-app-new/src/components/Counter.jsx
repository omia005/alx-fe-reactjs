import React,{ useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Current Count = {count}</p>
      <button onclick ={() => setCount(count + 1)}>Increament</button>
      <button onclick ={() => setCount(count - 1)}>Decreament</button>
    </div>
  );
}
