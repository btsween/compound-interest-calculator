import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 5.5rem;
  width: 100%;
  justify-content: space-between;
  color: rgb(238, 238, 238);
  background-color: rgb(35, 48, 68);

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const HeaderLeft = styled.div`
  margin-left: 5rem;
  font-size 48px;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 650px) {
    margin: auto;
    font-size: 42px;
  }
`;

const HeaderRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 26px;
  display: flex;

  @media (max-width: 650px) {
    margin: auto;
    font-size: 22px;
  }
`;

const HeaderTab = styled.a`
  margin-left: 2rem;
  margin-right: 2rem;

  @media (max-width: 650px) {
    margin: 6px;
  }
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft>Bryan Sweeney</HeaderLeft>
      <HeaderRight>
        <HeaderTab href="#">Projects</HeaderTab>
        <HeaderTab href="#">About</HeaderTab>
      </HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
