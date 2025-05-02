import React from 'react';
import { DropDown } from './DropDown';
import { itemsOptions, Option } from '../../../data/options';

interface LostitemDropDownProps {
  selectedItem: Option;
  setSelectedItem: (option: Option) => void;
  darkMode: boolean;
  customData?: Option[];
}

export const DateDropDown: React.FC<LostitemDropDownProps> = ({ selectedItem, setSelectedItem, darkMode, customData }) => {
  return (
    <>
      <DropDown
        options={customData ? customData : itemsOptions}
        selectedOption={selectedItem}
        setSelectedOption={setSelectedItem}
        logoSrc={darkMode ? '/images/common/dateDark.webp' : '/images/common/date.webp'}
      />
    </>
  );
};
