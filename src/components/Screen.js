import styled from "styled-components";

export const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  color: #fff;

  display: flex;
  flex-direction: column;
  .title {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 100px;
    text-align: center;
    margin-top: 80px;
  }
`;
