import { Tab } from '@/types';
import React from 'react';

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const styles = active
    ? 'text-white border-b border-purple-500'
    : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p
        className={`font-semibold hover:text-white ${styles}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
