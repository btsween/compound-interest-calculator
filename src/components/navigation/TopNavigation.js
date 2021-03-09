import React from "react";
import styled from "styled-components";
import Colors from "../../assets/Colors";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 6rem;
  width: 100%;
  align-items: center;
  background-color: ${Colors.darkBlue};
  color: rgb(238, 238, 238);
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  margin: 3rem;
  font-size: 30px;
  font-family: Roboto-Medium;
`;

const Menu = styled.div`
  margin: 1rem;
  display: flex;
`;

const Tab = styled.div`
  font-size: 24px;
  margin: 2rem;
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderTitle>Compound Interest Calculator</HeaderTitle>
      <Menu>
        <Tab>apps</Tab>
        <Tab>portfolio</Tab>
      </Menu>
    </TopNavWrapper>
  );
}

export default TopNavigation;
