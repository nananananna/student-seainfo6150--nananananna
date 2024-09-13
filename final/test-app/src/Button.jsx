import React from 'react';
import { useState } from 'react';

const Button = ({ type = 'button', visual = 'button', onClick, children, ...props }) => {

    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleButtonClick = () => {
      setIsHighlighted(!isHighlighted);
      if (onClick) {
        onClick();
      }
    };
    return (
      <button type={type} className={`${type} ${visual} `} onClick={handleButtonClick} {...props}>
        {children}
      </button>
    );
  };

export default Button;