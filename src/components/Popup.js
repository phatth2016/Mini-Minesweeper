import React from "react";
import styled from "styled-components";

export default function Popup({ children }) {
  return (
    <PopupStyled>
      <div className="content">{children}</div>
    </PopupStyled>
  );
}

const PopupStyled = styled.div`
  position: absolute;
  width: 0px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1b1bc9;
  .content {
    width: 100%;
    /* height: 200px; */
    background: #fff;
    border-radius: 6px;
    z-index: 1;
    background: #ffffff00;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 24px;
  }
`;
