import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface SidebarButtonProps {
  link: string;
  title: string;
  icon: string;
  state: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  link,
  title,
  icon,
  state,
}) => {
  return (
    <>
      <NavLink
        to={link}
        className="mx-auto w-10/12 text-gray text-base lg:text-lg navlink rounded-md overflow-hidden"
      >
        <div>
          <button className="h-11 w-full flex flex-row justify-start items-center gap-2">
            <div className={`${state ? 'px-2' : 'mx-auto'}`}>
              <Icon
                icon={icon}
                className={`text-2xl ${
                  state
                    ? 'transform scale-100'
                    : 'transform scale-150'
                } transition-transform duration-500`}
              />
            </div>
            {state && title}
          </button>
        </div>
      </NavLink>
    </>
  );
};

export default SidebarButton;