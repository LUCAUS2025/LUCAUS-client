import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../BaseButton';

interface DropDownProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  logoSrc: string;
}

export const DropDown: React.FC<DropDownProps> = ({ options, selectedOption, setSelectedOption, logoSrc }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <Logo src={logoSrc} />
      <SelectedText onClick={() => setActive((prev) => !prev)}>{selectedOption}</SelectedText>
      <DownIcon src="images/common/dropDown.webp" />
      <OptionList active={active}>
        {options.map((element) => (
          <OptionItem
            key={element}
            onClick={() => {
              setActive(false);
              setSelectedOption(element);
            }}
          >
            {element}
          </OptionItem>
        ))}
      </OptionList>
    </Wrapper>
  );
};

const Wrapper = styled(BaseButton)``;
const Logo = styled.img`
  width: 16px;
  margin-bottom: 2.5px;
`;
const SelectedText = styled.div`
  position: relative;
`;
const DownIcon = styled.img`
  width: 20px;
`;
const OptionList = styled.div<{ active: boolean }>`
  width: 100%;
  top: 100%;
  position: absolute;
  list-style-type: none;
  display: ${({ active }) => (active ? 'block' : 'none')};
  overflow-y: scroll;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 0px 12px 0px #00000014;
`;
const OptionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px 12px;
  border: 1px solid '#D1D5DC';
  border-top: 1px solid '#D1D5DC';
`;
