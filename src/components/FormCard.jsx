import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";

const FormCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-bewteen;
  padding: 0.5rem;
  background-color: ${Colors.white};
  height: 5rem;
  width: 12rem;
  font-size: 18px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
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

function FormCard(props) {
  return (
    <FormCardWrapper onClick={() => console.log("hello")}>
      <StyledLabel>{props.labelText}</StyledLabel>
      <StyledInput
        type="text"
        value={props.value}
        required
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={(e) => props.handleBlur(e.target.value, "INITIAL")}
      />
    </FormCardWrapper>
  );
}

export default FormCard;
