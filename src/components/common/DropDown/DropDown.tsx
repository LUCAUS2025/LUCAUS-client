import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../BaseButton';
import { Option } from '../../../data/options';

interface DropDownProps {
  options: Option[];
  selectedOption: Option;
  setSelectedOption: (option: Option) => void;
  logoSrc: string;
}

export const DropDown: React.FC<DropDownProps> = ({ options, selectedOption, setSelectedOption, logoSrc }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <SelectedWrapper>
        <Logo src={logoSrc} />
        <SelectedText onClick={() => setActive((prev) => !prev)}>{selectedOption.label}</SelectedText>
        <DownIcon src="images/common/dropDown.webp" />
      </SelectedWrapper>
      <OptionList active={active}>
        {options.map((element) => (
          <OptionItem
            key={element.value}
            onClick={() => {
              setActive(false);
              setSelectedOption(element);
            }}
          >
            {element.label}
          </OptionItem>
        ))}
      </OptionList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const SelectedWrapper = styled(BaseButton)`
  z-index: 2;
`;
const Logo = styled.img`
  width: 16px;
  margin-bottom: 2.5px;
`;
const SelectedText = styled.div``;
const DownIcon = styled.img`
  width: 20px;
`;
const OptionList = styled.div<{ active: boolean }>`
  width: 98%;
  top: 93%;
  position: absolute;
  list-style-type: none;
  display: ${({ active }) => (active ? 'block' : 'none')};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 0px 12px 0px #00000014;
  border: 1px solid #d1d5dc;
  z-index: 1;
`;
const OptionItem = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px 12px;
  border-top: 1px solid #d1d5dc;
`;
