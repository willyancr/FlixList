import React from 'react';

type MenuProps = {
  title: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
};

function HandleMenus({ title, selected, icon, onClick }: MenuProps) {
  return (
    <div
      className={`flex items-center gap-3 p-2 cursor-pointer hover:bg-projeto-border rounded ease-in duration-150 ${
        selected
          ? 'bg-projeto-tertiary/80 text-white rounded ease-in duration-150'
          : ''
      }`}
      onClick={onClick}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
}

export default HandleMenus;
