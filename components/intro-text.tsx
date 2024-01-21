// [meta] name: WordByWordDisplay
// [meta] description: create a compoment to display the text "Unlock the Speed of Reading" word by word on the same place

import { useEffect } from "react";
import { useState } from "react";

const WordByWordDisplay = () => {
  const phrase = "Unlock the Speed of Reading";
  const words = phrase.split(" ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 400); // Change the word every 800ms
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="font-bold text-2xl text-center transition-opacity duration-700">
        {words[index]}
      </div>
    </div>
  );
};

export default WordByWordDisplay;
