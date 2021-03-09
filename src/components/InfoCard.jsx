import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";
import { ReactComponent as CompoundInterestPhoto } from "../assets/photos/compound-interest.svg";

const InfoCardWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: rem;
  background-color: ${Colors.white};
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  max-width: 800px;
`;

const CardHeader = styled.span`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const PhotoWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: grey;
  opacity: 0.7; // TODO:  better background color..
`;

const InfoText = styled.span`
  font-size: 18px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

function InfoCard() {
  return (
    <InfoCardWrapper>
      <CardHeader></CardHeader>
      <PhotoWrapper>
        <CompoundInterestPhoto />
      </PhotoWrapper>
      <InfoText>
        First span will talk about 'M', which might represent the variable name.
      </InfoText>
      <InfoText>
        Then talk about the effects of that variable and how they can impact the
        overall equation.
      </InfoText>
    </InfoCardWrapper>
  );
}

export default InfoCard;
