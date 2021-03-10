import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

function FooterIcon(icon) {
  return <IconWrapper>{icon.children}</IconWrapper>;
}

export default FooterIcon;
