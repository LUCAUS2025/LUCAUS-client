import React from 'react';
import { Option, placeOptions } from '../../../data/options';
import { DropDown } from './DropDown';

interface PlaceDropDownProps {
  selectedPlace: Option;
  setSelectedPlace: (option: Option) => void;
}

export const PlaceDropDown: React.FC<PlaceDropDownProps> = ({ selectedPlace, setSelectedPlace }) => {
  return (
    <>
      <DropDown
        options={placeOptions}
        selectedOption={selectedPlace}
        setSelectedOption={setSelectedPlace}
        logoSrc={'images/common/location.webp'}
      />
    </>
  );
};
