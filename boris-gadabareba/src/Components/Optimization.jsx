import React, { useState, useMemo, useCallback } from 'react';

function Optimization() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // 3.5.1 useMemo: იმახსოვრებს გაფილტრულ ლუწ რიცხვებს, რათა არ გადაითვალოს ყოველ რენდერზე
  const evenNumbers = useMemo(() => {
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  // 3.5.2 useCallback: იმახსოვრებს ფუნქციას, რათა ხელახლა არ შეიქმნას მეხსიერებაში
  const addNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  }, []);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', marginBottom: '15px', borderRadius: '8px' }}>
      <h2>3.5 ოპტიმიზაცია (useMemo & useCallback)</h2>
      <p>ყველა რიცხვი: {numbers.join(', ')}</p>
      <p>ლუწი რიცხვები (useMemo): {evenNumbers.join(', ')}</p>
      <button onClick={addNumber}>რიცხვის დამატება (useCallback)</button>
    </div>
  );
}

export default Optimization;