import React from "react";
import styled from "styled-components";

export default function Cell({ details, updateFlag, revealcell, size }) {
  const renderValue = () => {
    if (details.revealed) {
      if (details.value === "X") {
        return "💣";
      }
      if (details.value === 0) {
        return "";
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
      details={details}
    >
      {renderValue()}
    </CellStyled>
  );
}

const CellStyled = styled.div`
  width: ${(props) => (props.size ? `calc(100% / ${props.size})` : "25px")};
  height: ${(props) => (props.size === 9 ? "45px" : "25px")};

  background-color: ${(props) =>
    props.details.value === 0 && props.details.revealed ? "#cccccc63" : "#000"};

  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
`;
