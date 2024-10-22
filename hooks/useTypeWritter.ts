import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (index === text.length) {
          clearTimeout(timeoutId);
          return;
        }
  
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [text, speed, index]);
  
    return displayText;
  };