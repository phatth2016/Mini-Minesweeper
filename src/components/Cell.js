import React from "react";
import styled from "styled-components";

export default function Cell({ details, updateFlag, revealcell }) {
  const renderValue = (value) => {
    if (value === "X") {
      return "💣";
    }
    return value;
  };

  return (
    <CellStyled
      onClick={() => {
        revealcell(details.x, details.y);
      }}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
    >
      {details.revealed ? renderValue(details.value) : ""}
    </CellStyled>
  );
}

const CellStyled = styled.div`
  width: 25px;
  height: 25px;
  background-color: #000;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;
