import React from "react";
import styled from "styled-components";

interface Iprops {
  text: string;
  onChange: (value: string) => void;
  isActive: boolean;
}
const SearchFilter = ({ text, onChange, isActive }: Iprops) => {
  return (
    <Tab flag={isActive}>
      <span onClick={() => onChange(text)}>{text}</span>
      <span onClick={() => onChange("")}>{isActive && <i className="fa-solid fa-xmark"></i>}</span>
    </Tab>
  );
};

const Tab = styled.p<{ flag: boolean }>`
  color: ${({ flag }) => (flag ? "#000" : "gray")};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default SearchFilter;
