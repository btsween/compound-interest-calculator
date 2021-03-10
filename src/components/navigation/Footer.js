import React from "react";
import styled from "styled-components";
import Colors from "../../assets/Colors";
import { ReactComponent as GithubIcon } from "../../assets/images/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin-icon.svg";

const TextWrapper = styled.span`
  margin-top: 5px;
  font-size: 20px;
  margin-right: 1rem;
`;

const FooterIcon = styled.a`
  height: 2.2rem;
  width: 2.2rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
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
      <FooterIcon href="https://www.linkedin.com/in/btsweeney/">
        <LinkedinIcon />
      </FooterIcon>
      <FooterIcon href="https://github.com/btsween/compound-interest-calculator">
        <GithubIcon />
      </FooterIcon>
    </FooterWrapper>
  );
}

export default Footer;
