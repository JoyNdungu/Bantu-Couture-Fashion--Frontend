import { useState, useEffect } from "react";

const Typewriter = ({ texts = [], typingSpeed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, pause]);

  return (
    <h2 className="text-2xl md:text-2xl font-mono text-[#f2eee3] text-center">
      {displayedText}
      <span className="border-r-2 border-orange-600 animate-pulse ml-1"></span>
    </h2>
  );
};

export default Typewriter;