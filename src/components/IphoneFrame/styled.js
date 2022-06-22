import styled from "styled-components";

export const Styled = styled.div`
  @keyframes relojAnalogico {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes shake {
    0% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
  @keyframes shake-2 {
    0% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(1deg);
    }
  }
  @keyframes grabarPantalla {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  .iphoneMock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .iphoneMock .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    /* width: 90%; */
    margin: 0 auto;
    padding: 50px 0;
    overflow: hidden;
  }
  .iphoneMock .container .interactionInfo {
    width: 600px;
    margin: 50px;
  }
  .iphoneMock .container .interactionInfo.hidden > * {
    opacity: 0;
    transform: translateY(-10px);
  }

  .iphoneMock .container .interactionInfo h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .iphoneMock .container .interactionInfo .importante:before {
    content: "*";
    margin-right: 5px;
    color: red;
  }
  .iphoneMock .container .interactionInfo .botones {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    margin: 20px auto;
  }
  .iphoneMock .container .interactionInfo .botones .boton {
    padding: 10px 20px;
    margin-right: 20px;
    min-width: 225px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #1b1b1b;
    box-sizing: border-box;
    cursor: pointer;
  }
  .iphoneMock .container .interactionInfo .botones .boton.activo:before {
    content: attr(data-back);
  }
  .iphoneMock .container .interactionInfo .botones .boton:before {
    content: attr(data-front);
  }
  .iphoneMock .container .iphone {
    width: 358px;
    height: 700px;
    border-radius: 45px;
    position: relative;
    user-select: none;
    transition: ease all 1s;
  }
  .iphoneMock .container .iphone.initAnimation {
    transform: translateY(200px);
    opacity: 0;
  }
  .iphoneMock .container .iphone.initAnimation .bordeColor {
    transform: rotateY(180deg);
    box-shadow: inset 0 0 7px 1px #fff;
  }
  .iphoneMock .container .iphone.initAnimation .bordeColor .backSide {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  .iphoneMock .container .iphone.powerOn .bordeColor .bordeNegro .logo {
    opacity: 1;
    transition-delay: 1s;
  }
  .iphoneMock .container .iphone.arrhe .bordeColor .bordeNegro .logo {
    transform: scale(25);
    transition-duration: 0.5s;
  }
  .iphoneMock .container .iphone.showBackSide {
    transform: translateY(-10px);
  }
  .iphoneMock .container .iphone.showBackSide .bordeColor {
    transform: rotateY(180deg);
    box-shadow: inset 0 0 7px 1px #fff;
  }
  .iphoneMock .container .iphone.showBackSide .bordeColor .backSide {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  .iphoneMock .container .iphone:before,
  .iphoneMock .container .iphone:after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    width: 6px;
    height: 7px;
    z-index: 1;
  }
  .iphoneMock .container .iphone:before {
    top: 1px;
    right: 70px;
  }
  .iphoneMock .container .iphone:after {
    bottom: -1px;
    left: 70px;
  }
  .iphoneMock .container .iphone .bordeColor {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    background-color: #152839;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 0 3px 1px #fff;
    border-radius: 45px;
    position: relative;
    transition: ease all 0.5s;
  }
  .iphoneMock .container .iphone .bordeColor:before,
  .iphoneMock .container .iphone .bordeColor:after {
    content: "";
    position: absolute;
    top: 65px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 7px;
    height: 6px;
    z-index: 1;
  }
  .iphoneMock .container .iphone .bordeColor:before {
    left: 0px;
  }
  .iphoneMock .container .iphone .bordeColor:after {
    right: 0px;
  }
  .iphoneMock .container .iphone .bordeColor .botones:before,
  .iphoneMock .container .iphone .bordeColor .botones:after {
    content: "";
    position: absolute;
    bottom: 65px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 7px;
    height: 6px;
    z-index: 1;
  }
  .iphoneMock .container .iphone .bordeColor .botones:before {
    left: 0px;
  }
  .iphoneMock .container .iphone .bordeColor .botones:after {
    right: 0px;
  }
  .iphoneMock .container .iphone .bordeColor .botones > * {
    position: absolute;
    left: -3px;
    width: 3px;
    background: linear-gradient(90deg, transparent, #152839);
    border-radius: 20px 10px 10px 20px;
  }
  .iphoneMock .container .iphone .bordeColor .botones .touchID {
    top: 160px;
    right: -3px;
    left: auto;
    height: 80px;
    background: linear-gradient(90deg, #152839, transparent);
    border-radius: 10px 20px 20px 10px;
  }
  .iphoneMock .container .iphone .bordeColor .botones .switch {
    top: 100px;
    height: 25px;
  }
  .iphoneMock .container .iphone .bordeColor .botones .vol {
    top: 150px;
    height: 45px;
  }
  .iphoneMock .container .iphone .bordeColor .botones .vol.down {
    top: 210px;
  }
  .iphoneMock .container .iphone .bordeColor .backSide {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    border-radius: 40px;
    background-color: #152839;
    transform: rotateY(180deg);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    overflow: hidden;
    transition: ease all 0.3s;
    z-index: 1000;
  }
  .iphoneMock .container .iphone .bordeColor .backSide:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle farthest-corner at 245px 0px,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 120px;
    height: 120px;
    padding: 10px;
    border-radius: 25px;
    box-sizing: border-box;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent);
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.4);
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: -10px 0 10px -10px rgba(255, 255, 255, 0.4);
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .backSide
    .camaras
    .cam:nth-child(3) {
    margin: auto 0;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam:before,
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam:after {
    content: "";
    position: absolute;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam:before {
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 50%;
    box-shadow: -2px 2px 8px 0 #000;
    background: linear-gradient(45deg, #152839 65%, rgba(255, 255, 255, 0.5));
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1b1b1b;
    border: 9px solid rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .cam .lente {
    position: absolute;
    width: 25%;
    height: 25%;
    border-radius: 50%;
    box-shadow: inset 2px 0px 4px -4px #fff;
    background: radial-gradient(
      ellipse farthest-corner at 8px 2px,
      #152839,
      #000
    );
    z-index: 1;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .flash,
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .sensor {
    position: absolute;
    right: 20px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .flash:before,
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .sensor:before {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .flash {
    top: 5px;
    background-color: #fff;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .flash:before {
    width: 100%;
    height: 100%;
    background: radial-gradient(#fff291, #ffd5fe);
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .sensor {
    bottom: 5px;
    background-color: #000;
  }
  .iphoneMock .container .iphone .bordeColor .backSide .camaras .sensor:before {
    top: -3px;
    right: -7px;
    width: 3px;
    height: 3px;
    background-color: #000;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border-radius: 40px;
    background-color: #000;
    position: relative;
    overflow: hidden;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: 7px solid #000;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 100;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    width: 150px;
    height: 32px;
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
    background-color: #000;
    z-index: 100;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch:before,
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch:after {
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 7px solid transparent;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch:before {
    left: -17px;
    border-right-color: #000;
    transform: rotate(-50deg);
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch:after {
    right: -17px;
    border-left-color: #000;
    transform: rotate(50deg);
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .bocina {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    width: 40px;
    height: 4px;
    border-radius: 20px;
    background-color: #1b1b1b;
    border: 0.7px solid #171717;
    box-shadow: inset 0px -0.3px 1px 0px #8c8c8c;
    position: relative;
    overflow: hidden;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .bocina:before,
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .bocina:after {
    content: "";
    position: absolute;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .bocina:before {
    width: 0;
    height: 60%;
    transform: skew(-10deg);
    box-shadow: 1px 0 0px 0.2px #313131, 2px 0 0px 0.2px #313131,
      3px 0 0px 0.2px #313131, 4px 0 0px 0.2px #313131, 5px 0 0px 0.2px #313131,
      6px 0 0px 0.2px #313131, 7px 0 0px 0.2px #313131, 8px 0 0px 0.2px #313131,
      9px 0 0px 0.2px #313131, 10px 0 0px 0.2px #313131,
      11px 0 0px 0.2px #313131, 12px 0 0px 0.2px #313131,
      13px 0 0px 0.2px #313131, 14px 0 0px 0.2px #313131,
      15px 0 0px 0.2px #313131, 16px 0 0px 0.2px #313131,
      17px 0 0px 0.2px #313131, 18px 0 0px 0.2px #313131,
      19px 0 0px 0.2px #313131, 20px 0 0px 0.2px #313131,
      21px 0 0px 0.2px #313131, 22px 0 0px 0.2px #313131,
      23px 0 0px 0.2px #313131, 24px 0 0px 0.2px #313131,
      25px 0 0px 0.2px #313131, 26px 0 0px 0.2px #313131,
      27px 0 0px 0.2px #313131, 28px 0 0px 0.2px #313131,
      29px 0 0px 0.2px #313131, 30px 0 0px 0.2px #313131,
      31px 0 0px 0.2px #313131, 32px 0 0px 0.2px #313131,
      33px 0 0px 0.2px #313131, 34px 0 0px 0.2px #313131,
      35px 0 0px 0.2px #313131, 36px 0 0px 0.2px #313131,
      37px 0 0px 0.2px #313131, 38px 0 0px 0.2px #313131,
      39px 0 0px 0.2px #313131;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .bocina:after {
    width: 95%;
    height: 0;
    box-shadow: 1px -0.8px 0px 0.2px #313131, 1px 0px 0px 0.2px #313131,
      1px 0.8px 0px 0.2px #313131;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .camara {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    right: 35px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #1b1b1b;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .camara:before,
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .camara:after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .camara:before {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: radial-gradient(#000, #152839 60%);
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .notch .camara:after {
    width: 4px;
    height: 4px;
    margin-top: 2px;
    margin-right: 2px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .logo {
    position: absolute;
    width: 70px;
    height: 70px;
    opacity: 0;
    transition: ease all 0.3s;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .logo svg {
    color: #fff;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .mainScreen {
    /* background-image: url("https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/wallpaper.jpg?alt=media&token=059229cc-3823-4d27-834a-7b62cabd69d2"); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border-radius: 32px;
    background-color: #fff;
    background-color: transparent;
    background-blend-mode: soft-light;
    position: relative;
    overflow: hidden;
    transition: ease all 1s;
    position: relative;
    @media screen and (max-width: 768px) {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 110;
      border-radius: 0;
      background: #000;
      width: 100%;
      height: 100%;
    }
  }
`;
