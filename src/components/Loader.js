import styled from "styled-components";

import React from "react";

export default function Loader(props) {
  return (
    <LoaderStyled {...props}>
      <div className="loader"></div>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    border: 4px solid rgb(0 0 0 / 85%);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
