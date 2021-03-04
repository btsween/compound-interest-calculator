import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 6rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 48, 68);
  color: rgb(238, 238, 238);
`;

const HeaderText = styled.div`
  font-size: 36px;
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderText>Compound Interest Calculator</HeaderText>
    </TopNavWrapper>
  );
}

export default TopNavigation;
