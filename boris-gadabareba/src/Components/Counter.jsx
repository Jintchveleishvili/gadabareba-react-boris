import React, { useState, useEffect } from 'react';

function Counter() {
  // 3.1 useState - რიცხვის შენახვა საწყისი მნიშვნელობით 0
  const [count, setCount] = useState(0);

  // 3.2 useEffect - შეტყობინების გამოტანა კონსოლში კომპონენტის ჩატვირთვისას
  useEffect(() => {
    console.log("კომპონენტი წარმატებით ჩაიტვირთა!");
  }, []);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', marginBottom: '15px', borderRadius: '8px' }}>
      <h2>3.1 & 3.2 Counter (useState & useEffect)</h2>
      <h3>რიცხვი: {count}</h3>
      <button onClick={() => setCount(count + 1)}>გაზრდა (+1)</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>შემცირება (-1)</button>
    </div>
  );
}

export default Counter;