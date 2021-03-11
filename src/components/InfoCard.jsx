import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";
import { ReactComponent as CompoundInterestPhoto } from "../assets/images/compound-interest.svg";

const InfoCardWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: rem;
  background-color: ${Colors.white};
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
  max-width: 850px;
  display: none;
  min-width: 30rem;
  border-radius: 0.5rem;

  &.active {
    display: flex;
  }
`;

const CardHeader = styled.span`
  font-size: 24px;
  margin-bottom: 1rem;
  font-family: Roboto-Medium;
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

function InfoCard(props) {
  return (
    <InfoCardWrapper
      className={props.activeForm === props.info.formName ? "active" : ""}
    >
      <CardHeader>{props.info.header}</CardHeader>
      <PhotoWrapper>
        <CompoundInterestPhoto />
      </PhotoWrapper>
      {props.info.body.map((text, index) => {
        return <InfoText key={index}>{text}</InfoText>;
      })}
    </InfoCardWrapper>
  );
}

export default InfoCard;
