import React from "react";
import styled from "styled-components";

export default function Cell({ details, updateFlag, revealcell, size }) {
  const renderValue = () => {
    if (details.revealed) {
      if (details.value === "X") {
        return "💣";
      }
      return details.value;
    }
    if (details.flagged) {
      return "🇻🇳";
    }
    return "";
  };

  return (
    <CellStyled
      onClick={() => {
        revealcell(details.x, details.y);
      }}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      size={size}
    >
      {renderValue()}
    </CellStyled>
  );
}

const CellStyled = styled.div`
  width: ${(props) => (props.size ? `calc(100% / ${props.size})` : "25px")};
  height: 28px;
  background-color: #000;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;
