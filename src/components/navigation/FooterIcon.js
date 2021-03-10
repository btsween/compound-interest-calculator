import React from "react";
import styled from "styled-components";

const FooterIcon = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
`;

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
