import React from "react";
import styled from "styled-components";
import Colors from "../../assets/Colors";

const TextWrapper = styled.span`
  margin-top: 5px;
  font-size: 20px;
  margin-right: 1rem;
`;

const FooterWrapper = styled.div`
  background-color: ${Colors.white};
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

function Footer() {
  return (
    <FooterWrapper>
      &copy; &nbsp;
      <TextWrapper>Bryan Sweeney, 2021</TextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
