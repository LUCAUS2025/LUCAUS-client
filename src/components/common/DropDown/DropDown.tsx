import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../BaseButton';
import { Option } from '../../../data/options';

interface DropDownProps {
  options: Option[];
  selectedOption: Option;
  setSelectedOption: (option: Option) => void;
  logoSrc: string;
  isLong?: boolean;
}

export const DropDown: React.FC<DropDownProps> = ({ options, selectedOption, setSelectedOption, logoSrc, isLong }) => {
  const [active, setActive] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [delayedActive, setDelayedActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && e.target instanceof Node && !dropDownRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropDown = () => {
    const willOpen = !active;
    setActive(willOpen);
    if (willOpen) {
      setTimeout(() => setDelayedActive(true), 200); // item 요소 누르면 0.2초 뒤 적용..
    } else {
      setDelayedActive(false);
    }
  };
  return (
    <Wrapper onClick={toggleDropDown} ref={dropDownRef} isLong={isLong}>
      <SelectedWrapper $active={active}>
        <Logo src={logoSrc} />
        <SelectedText isLong={isLong}>{selectedOption.label}</SelectedText>
        <DownIcon src="/images/common/dropDown.webp" />
      </SelectedWrapper>
      <OptionList active={active}>
        {options.map((element) => (
          <OptionItem
            key={element.value}
            onClick={(e) => {
              setActive(false);
              setSelectedOption(element);
              e.stopPropagation();
            }}
          >
            {element.label}
          </OptionItem>
        ))}
      </OptionList>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isLong?: boolean }>`
  z-index: 3;
  position: relative;
  width: ${({ isLong }) => (isLong ? '130px' : '')};
`;
const SelectedWrapper = styled(BaseButton)<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? '#101828' : '#d1d5dc')};
  box-shadow: ${({ $active }) => ($active ? '0px 0px 12px 0px #00000014' : 'none')};
  z-index: 3;
`;
const Logo = styled.img`
  width: 16px;
  margin-bottom: 2.5px;
`;
const SelectedText = styled.div<{ isLong?: boolean }>`
  width: ${({ isLong }) => (isLong ? '50%' : '')};
  //background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DownIcon = styled.img`
  width: 20px;
`;
const OptionList = styled.div<{ active: boolean }>`
  width: 98%;
  top: 90%;
  position: absolute;
  list-style-type: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 0px 12px 0px #00000014;
  border: 1px solid #d1d5dc;
  z-index: 2;
  overflow: hidden;

  max-height: ${({ active }) => (active ? '500px' : '0')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-8px)')};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: all 0.2s ease;
`;
const OptionItem = styled.div`
  display: flex;
  //height: 30px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  padding: 8px 12px 8px 12px;
  border-top: 1px solid #d1d5dc;
  background-color: #fafafa;
  &:hover {
    background-color: #e7f1ff;
  }
`;
