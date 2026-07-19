import React, { useRef, useState, useEffect } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const input = inputRef.current;
    const handler = () => setCharCount(input.value.length);
    input.addEventListener('input', handler);
    return () => input.removeEventListener('input', handler);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Start typing..."
        style={{ padding: '8px', fontSize: '16px', width: '300px' }}
      />
      <p>Character count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;