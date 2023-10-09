import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const AboutAccordians = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-box">
          <div className="accordion-header" onClick={() => onItemClick(index)}>
            <h3>{item.title}</h3>
            {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};


export default AboutAccordians;
