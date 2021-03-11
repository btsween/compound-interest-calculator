import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";
import FormNames from "../constants/FormNames";

const FormCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem;
  background-color: ${Colors.white};
  height: 6rem;
  width: 12rem;
  font-size: 18px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  &.active {
    border: solid 1px ${Colors.darkBlue};
  }
`;

const StyledLabel = styled.label`
  padding: 1rem;
`;

const StyledInput = styled.input`
  width: 6rem;
  margin-right: auto;
  margin-top: auto;
  margin-left: 0.75rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function FormCard(props) {
  return (
    <FormCardWrapper
      onClick={() => props.onClick(props.form)}
      className={props.form === props.activeForm ? "active" : ""}
    >
      <StyledLabel>{props.labelText}</StyledLabel>
      {props.form === FormNames.COMPOUND ? (
        <OptionsContainer>
          <OptionWrapper>
            <label>Monthly</label>
            <input
              type="radio"
              checked={props.value === "MONTHLY" ? true : false}
              onChange={() => props.onChange("MONTHLY")}
            />
          </OptionWrapper>
          <OptionWrapper>
            <label>Yearly</label>
            <input
              type="radio"
              checked={props.value === "YEARLY" ? true : false}
              onChange={() => props.onChange("YEARLY")}
            />
          </OptionWrapper>
        </OptionsContainer>
      ) : (
        <StyledInput
          type="text"
          value={props.value}
          required
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={(e) => props.handleBlur(e.target.value, props.form)}
        />
      )}
    </FormCardWrapper>
  );
}

export default FormCard;
