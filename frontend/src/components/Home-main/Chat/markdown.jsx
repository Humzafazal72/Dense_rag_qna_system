import { useState, useEffect } from "react";

const TypingMarkdown = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length && !isPaused) {
      const timeout = setTimeout(() => {
        // Handle markdown special characters
        let nextChar = text[currentIndex];
        let charsToAdd = 1;

        // Handle markdown symbols
        if (
          nextChar === "`" ||
          nextChar === "*" ||
          nextChar === "_" ||
          nextChar === "#"
        ) {
          while (
            currentIndex + charsToAdd < text.length &&
            text[currentIndex + charsToAdd] !== " " &&
            text[currentIndex + charsToAdd] !== "\n"
          ) {
            charsToAdd++;
          }
        }

        setDisplayedText(text.slice(0, currentIndex + charsToAdd));
        setCurrentIndex(currentIndex + charsToAdd);

        // Pause at the end of sentences
        if (nextChar === "." || nextChar === "!" || nextChar === "?") {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 500);
        }
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isPaused]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <div className="whitespace-pre-wrap font-mono">
        {displayedText.split("\n").map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.startsWith("```") ? (
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>{line.replace(/```/g, "")}</code>
              </pre>
            ) : line.startsWith("#") ? (
              <h1 className="text-2xl font-bold my-4">
                {line.replace(/^#\s/, "")}
              </h1>
            ) : line.match(/\*\*(.*?)\*\*/g) ? (
              <span>
                {line
                  .split(/(\*\*.*?\*\*)/g)
                  .map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
              </span>
            ) : line.match(/\*(.*?)\*/g) ? (
              <span>
                {line
                  .split(/(\*.*?\*)/g)
                  .map((part, j) =>
                    part.startsWith("*") ? (
                      <em key={j}>{part.replace(/\*/g, "")}</em>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
              </span>
            ) : (
              line
            )}
            {i < displayedText.split("\n").length - 1 && <br />}
          </div>
        ))}
      </div>
      {currentIndex === text.length && (
        <div className="h-4 w-2 ml-1 inline-block bg-gray-400 animate-blink" />
      )}
    </div>
  );
};

export default TypingMarkdown;
