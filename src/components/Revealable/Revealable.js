'use client';
import { useState } from 'react';

function Revealable({ children }) {
  const [isSnippetShown, setIsSnippetShown] = useState(false);

  return isSnippetShown ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsSnippetShown(true)}>Reveal Content</button>
    </div>
  );
}

export default Revealable;
