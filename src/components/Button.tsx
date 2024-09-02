import React from 'react';

type ButtonProps = {
  variant?: 'first' | 'second' | 'third';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
     variant = 'first', 
     children, onClick 
    }) => {
  let className = '';

  switch (variant) {
    case 'first':
      className = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'second':
      className = 'bg-gray-500 text-white hover:bg-gray-600 mx-12';
      break;
    case 'third':
      className = 'bg-red-500 text-black border hover:bg-gray-900';
      break;
  }

  return (
    <button className={`px-4 py-2 rounded-md shadow-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
