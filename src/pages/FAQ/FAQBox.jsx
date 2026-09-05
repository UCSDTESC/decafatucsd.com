import React, { useState, useRef, useEffect } from 'react';

const FAQBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="border border-line rounded-[5px] my-[10px] overflow-hidden text-ink text-[24px] w-full max-w-[1000px] max-[768px]:text-[18px] max-[768px]:w-full">
      <div className="flex justify-between cursor-pointer p-[10px] bg-faq-general rounded-[5px] max-[768px]:p-2" onClick={toggleOpen}>
        <h3 className="m-0 max-[768px]:text-[20px]">{question}</h3>
        <span className="text-[1.5em] leading-none max-[768px]:text-[1.2em]">{isOpen ? '−' : '+'}</span>
      </div>
      <div
        className="p-[10px] bg-faq-general border-t border-line rounded-b-[5px] transition-[height] duration-300 ease-out overflow-hidden max-[768px]:p-2"
        ref={contentRef}
        style={{ height }}
      >
        <p className="my-[1em] max-[768px]:text-[18px]">{answer}</p>
      </div>
    </div>
  );
};

export default FAQBox;
