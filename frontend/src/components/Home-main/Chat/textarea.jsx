"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.css";
const CustomTextArea = ({ inputValue, handleInputChange, handleSubmit }) => {
  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";

    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = scrollHeight > 250 ? "250px" : `${scrollHeight}px`;
  }, [inputValue]);

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      return;
    }
    if (e.key === "Enter" && !e.ctrlKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        handleSubmit(e);
      }
    }
  };

  return (
    <textarea
      ref={textareaRef}
      rows={1}
      className={`${styles.scrollbar} flex-1 text-sm leading-[22px] p-0 pt-[3px] sm:pt-1.5 sm:text-base focus:outline-none resize-none`}
      placeholder="Ask..."
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default CustomTextArea;
