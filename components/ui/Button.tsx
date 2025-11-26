import React from 'react';
import { motion } from 'framer-motion';
import { AFFILIATE_LINK, BRAND_COLOR } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false 
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: `text-white hover:shadow-lg hover:scale-105`,
    outline: "border-2 border-gray-200 text-gray-700 hover:border-brand hover:text-brand bg-transparent",
    ghost: "text-gray-600 hover:text-brand bg-transparent hover:bg-gray-50",
    white: "bg-white text-brand hover:bg-gray-100 shadow-lg hover:scale-105"
  };

  const styleObj = variant === 'primary' ? { backgroundColor: BRAND_COLOR } : {};

  return (
    <motion.a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={styleObj}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};