import styled from "styled-components";

export const Point = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const BoardStyled = styled.div`
  .btn-back {
    color: #fff;
    text-decoration: underline;
    text-align: left;
    width: 100%;
    cursor: pointer;
    margin-bottom: 12px;
  }
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #000;
  width: 100%;
  .grid {
    width: 100%;
    .row {
      display: flex;
      width: 100%;
    }
  }
`;
