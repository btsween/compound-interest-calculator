import React from "react";
import styled from "styled-components";
import SlideShow from "./SlideShow";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  min-height: 2rem;
  font-size: 35px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-color: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: center;
  text-align: center;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.2);
  width: 50rem;
  max-width: 75vw;

  @media (max-width: 650px) {
    max-width: inherit;
    width: inherit;
    padding: 5px;
  }
`;

const BodyText = styled.div`
  text-align: center;
  font-size: 20px;
  padding-top: 0.75rem;
`;

/**
 * Current idea will be that ContentCard(s) will be used on both Experience and Portfolio pages and source content from the yml files.
 * In order to determine what content to source, will need to take params indicating the page.
 */
function ContentCard(props) {
  return (
    <CardWrapper>
      <CardBody>
        <CardHeader>{props.projectData.name}</CardHeader>
        <SlideShow assets={props.projectData.assets} />
        <BodyText>{props.projectData.description}</BodyText>
      </CardBody>
    </CardWrapper>
  );
}

export default ContentCard;
