import React from 'react';
import { IonButton } from '@ionic/react';

interface AppButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

const baseClasses = 'px-8 py-4 rounded-xl shadow-lg transition duration-300 text-lg font-semibold';
const variants = {
  primary: 'bg-primary-gold text-white hover:bg-primary-gold',
  outline: 'border-2 border-primary-gold text-primary-gold bg-transparent hover:bg-primary-gold hover:text-white',
};
const sizes = {
  sm: 'text-base py-2 px-4',
  md: 'text-lg py-3 px-6',
  lg: 'text-xl py-4 px-8',
};

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  size = 'md',
  ...props
}) => {
  const classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  return (
    <IonButton
      href={href}
      onClick={onClick}
      fill={variant === 'outline' ? 'outline' : 'solid'}
      className={classes}
      type={type}
      {...props}
    >
      {children}
    </IonButton>
  );
};

export default AppButton;