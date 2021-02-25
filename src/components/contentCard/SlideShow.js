import React, { useEffect } from "react";
import styled from "styled-components";
import RightChevron from "../../assets/icons/chevron-right.svg";
import LeftChevron from "../../assets/icons/chevron-left.svg";
import Photos from "../../assets/photos/Photos";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 34rem;
`;

const StyledImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  display: none;
  min-height: 34rem;
  object-fit: none;

  &.active {
    display: flex;
    min-height: auto;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chevron = styled.img`
  background-size: cover;
  height: 2rem;
  width: 2rem;
`;

const Button = styled.button`
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background-color: rgba(71, 130, 218, 0.05);
  display: flex;
  border-radius: 5px;

  &:hover {
    background-color: rgba(71, 130, 218, 0.15);
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-bottom: solid 1px black;
  margin-top: 0.75rem;
`;

const StyledVideo = styled.video`
  display: none;
  min-height: 30rem;

  &.active {
    display: flex;
  }
`;

const ImageDot = styled.button`
  height: 1rem;
  width: 1rem;
  background-color: rgba(71, 130, 218, 0.3);
  margin: 6px;
  border-radius: 8px;

  &.active {
    background-color: rgba(71, 130, 218, 0.88);
  }

  &:hover {
    background-color: rgba(71, 130, 218, 0.88);
  }
`;

function SlideShow(props) {
  console.log(props);
  const initialState = [];
  props.assets.map((asset, index) =>
    initialState.push({
      idx: index,
      isActive: index === 0 ? true : false,
    })
  );
  const [imageInfo, setImageInfo] = React.useState(initialState);
  const [currentActive, setCurrentActive] = React.useState(0);

  const handleLeftArrowClick = () => {
    if (currentActive > 0) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive((currentActive) => currentActive - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentActive < imageInfo.length - 1) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive((currentActive) => currentActive + 1);
    }
  };

  const handleDotClick = (dotIndex) => {
    if (currentActive !== dotIndex) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive(dotIndex);
    }
  };

  useEffect(() => {
    setImageInfo((imageInfo) => {
      const infoCopy = [...imageInfo];
      infoCopy[currentActive].isActive = true;
      return infoCopy;
    });
  }, [currentActive]);

  return (
    <Carousel>
      <ImageWrapper className="imageWrapper">
        {props.assets.map((asset, index) => {
          return asset.type === "photo" ? (
            <StyledImage
              key={index}
              src={Photos[asset.name]}
              className={imageInfo[index].isActive ? "active" : ""}
            />
          ) : (
            <StyledVideo
              key={index}
              src={Photos[asset.name]}
              controls
              autoplay
              format="video/mp4"
              className={imageInfo[index].isActive ? "active" : ""}
            />
          );
        })}
      </ImageWrapper>
      <NavigationContainer>
        <Button onClick={handleLeftArrowClick}>
          <Chevron src={LeftChevron}></Chevron>
        </Button>
        {props.assets.map((asset, index) => {
          return (
            <ImageDot
              key={index}
              val={index}
              className={imageInfo[index].isActive ? "active" : ""}
              onClick={handleDotClick.bind(this, index)}
            />
          );
        })}
        <Button onClick={handleRightArrowClick}>
          <Chevron src={RightChevron}></Chevron>
        </Button>
      </NavigationContainer>
    </Carousel>
  );
}

export default SlideShow;
