import { ProjectTag } from '@/data';
import React, {
  MouseEvent,
  MouseEventHandler,
} from 'react';

type ButtonProps = {
  children: React.ReactNode;
  styles: string;
  tagClick?: (tag: ProjectTag) => void;
  isSelected?: boolean;
  name?: ProjectTag;
};

const Button: React.FC<ButtonProps> = ({
  isSelected,
  styles,
  children,
  tagClick,
  name,
}) => {
  const buttonStyles = isSelected
    ? 'text-white border-purple-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${styles} ${buttonStyles}`}
      onClick={() => tagClick && name && tagClick(name)}
    >
      {children}
    </button>
  );
};

export default Button;
