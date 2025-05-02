import React from 'react';
import { DropDown } from './DropDown';
import { itemsOptions, Option } from '../../../data/options';

interface LostitemDropDownProps {
  selectedItem: Option;
  setSelectedItem: (option: Option) => void;
  darkMode: boolean;
}

export const LostitemDropDown: React.FC<LostitemDropDownProps> = ({ selectedItem, setSelectedItem, darkMode }) => {
  return (
    <>
      <DropDown
        options={itemsOptions}
        selectedOption={selectedItem}
        setSelectedOption={setSelectedItem}
        logoSrc={darkMode ? '/images/common/dateDark.webp' : '/images/common/date.webp'}
      />
    </>
  );
};
