import styled from "styled-components";

import React from "react";

export default function Iphone(props) {
  return (
    <Styled>
      {" "}
      <section className="iphoneMock">
        <div className="container">
          <div className="iphone arrhe">
            <div className="bordeColor">
              <div className="botones">
                <div className="switch"></div>
                <div className="vol up"></div>
                <div className="vol down"></div>
                <div className="touchID"></div>
              </div>
              <div className="backSide">
                <div className="camaras">
                  <div className="cam">
                    <div className="lente"></div>
                  </div>
                  <div className="cam">
                    <div className="lente"></div>
                  </div>
                  <div className="cam">
                    <div className="lente"></div>
                  </div>
                  <div className="flash"></div>
                  <div className="sensor"></div>
                </div>
                <div className="logo"></div>
              </div>
              <div className="bordeNegro">
                <div className="notch">
                  <div className="bocina"></div>
                  <div className="camara"></div>
                </div>
                <div className="logo"></div>
                <div className="mainScreen blur">
                  <div className="statusBar">
                    <div className="leftSide">
                      <div className="operador hidden">Telcel</div>
                      <div className="hora">08:56</div>
                      <div className="widgetPlus"></div>
                    </div>
                    <div className="rightSide">
                      <div className="signal mid">
                        <i className="bar"></i>
                      </div>
                      <div className="datos">5G</div>
                      <div className="bateria low"></div>
                      <div className="exitShake">Listo</div>
                    </div>
                  </div>
                  <div className="lockScreen hidden">
                    <div className="up">
                      <div className="lockIcon"></div>
                      <div className="hora">08:56</div>
                      <div className="fecha">Sábado, 27 de Febrero</div>
                    </div>
                    <div className="down">
                      <div className="sysIcon camara"></div>
                    </div>
                    <div
                      className="unlockBar"
                      data-msj="Desliza hacia arriba para desbloquear"
                    ></div>
                  </div>
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styled>
  );
}

const Styled = styled.div`
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
    /* position: absolute;
    right: 60px;
    top: 20px;
    z-index: 100; */
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
  .iphoneMock .container .interactionInfo > * {
    margin-bottom: 10px;
    transition: ease all 0.5s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(1) {
    transition-delay: 0.1s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(2) {
    transition-delay: 0.2s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(3) {
    transition-delay: 0.3s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(4) {
    transition-delay: 0.4s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(5) {
    transition-delay: 0.5s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(6) {
    transition-delay: 0.6s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(7) {
    transition-delay: 0.7s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(8) {
    transition-delay: 0.8s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(9) {
    transition-delay: 0.9s;
  }
  .iphoneMock .container .interactionInfo > *:nth-child(10) {
    transition-delay: 1s;
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
    width: 320px;
    height: 640px;
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
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .mainScreen.bloqueado {
    opacity: 0;
    pointer-events: none;
    transition: ease all 0.2s;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .mainScreen.blur {
    /* background-image: url(https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/wallpaperBlur.jpg?alt=media&token=22c91194-dfa0-4ebb-870e-9f585bf35b01); */
    transition-duration: 0.5s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.filterBlur {
    background-color: rgba(0, 0, 0, 0.2);
    filter: blur(5px);
    pointer-events: none;
    transition-duration: 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.filterBlur
    .appScreen {
    transform: scale(0.9);
    transition-duration: 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .appScreen
    .app {
    animation: shake 0.1s linear alternate infinite;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .appScreen
    .app.widgetFull {
    animation: shake-2 0.1s linear alternate infinite;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .operador,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .hora,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .signal,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .datos,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .bateria,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .operador,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .hora,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .signal,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .datos,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .bateria {
    opacity: 0;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .widgetPlus,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .leftSide
    .exitShake,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .widgetPlus,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .statusBar
    .rightSide
    .exitShake {
    transform: scale(1);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .appScreen
    .wrapperDots {
    padding: 3px 10px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.shakingApps
    .appScreen
    .wrapperDots
    .dot {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.widgetScreenOpen {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen.widgetScreenOpen
    .statusBar {
    opacity: 0;
  }
  .iphoneMock .container .iphone .bordeColor .bordeNegro .mainScreen .buscador {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 35px;
    color: #fff;
    font-size: 14px;
    border-radius: 10px;
    margin: 10px auto 30px auto;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .buscador
    .icono {
    width: 15px;
    height: 15px;
    margin-right: 7px;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .buscador
    .icono:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .buscador
    .icono:after {
    content: "";
    position: absolute;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .buscador
    .icono:before {
    top: 0;
    left: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid currentColor;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .buscador
    .icono:after {
    bottom: 0;
    right: 0;
    width: 1px;
    height: 5px;
    background-color: currentColor;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    height: 20px;
    padding: 5px 20px 0px 20px;
    padding-right: 12px;
    transition: ease all 0.1s;
    position: relative;
    z-index: 1;
    cursor: grab;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.onlyLed
    .leftSide,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.onlyLed
    .rightSide {
    display: none;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.camActiv:after,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.micActiv:after {
    content: "";
    position: absolute;
    top: 7px;
    right: 60px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00dc54;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.micActiv:after {
    background-color: #ff8e00;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar.mov {
    transform: translateY(-100%);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide {
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide
    > *.hidden {
    display: none;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide
    .widgetPlus {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 17px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    overflow: hidden;
    cursor: pointer;
    transition: ease all 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide
    .widgetPlus:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide
    .widgetPlus:after {
    position: absolute;
    content: "";
    width: 8px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .leftSide
    .widgetPlus:after {
    transform: rotate(90deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 18px;
    height: 10px;
    position: relative;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal.mid:before {
    opacity: 0.4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal.low:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal.low:after,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal.low
    .bar::before {
    opacity: 0.4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 5px;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal:before {
    right: 0;
    height: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal:after {
    right: 4px;
    height: 80%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal
    .bar:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal
    .bar:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 5px;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal
    .bar:before {
    right: 8px;
    height: 60%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .signal
    .bar:after {
    right: 12px;
    height: 40%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .datos {
    margin: 0 3px;
    color: #fff;
    font-size: 10px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 18px;
    height: 12px;
    margin: 0 3px;
    position: relative;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi.mid:before {
    opacity: 0.4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi.low:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi.low:after {
    opacity: 0.4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi
    .dot {
    position: absolute;
    bottom: -2px;
    width: 4px;
    height: 2px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi:after {
    content: "";
    position: absolute;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi:before {
    top: 0;
    width: 100%;
    height: 8px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .wifi:after {
    top: 4px;
    width: 10px;
    height: 3px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 15px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria.mid:after {
    width: 50%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria.low:after {
    width: 20%;
    background-color: #ffe600;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria:after {
    content: "";
    position: absolute;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria:before {
    right: -2px;
    width: 2px;
    height: 50%;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .bateria:after {
    left: 1px;
    width: 100%;
    height: 6px;
    border-radius: 1px;
    max-width: calc(100% - 2px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .statusBar
    .rightSide
    .exitShake {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 17px;
    font-size: 10px;
    font-weight: 600;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    overflow: hidden;
    cursor: pointer;
    transition: ease all 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    position: absolute;
    width: 100%;
    height: calc(100% - 25px);
    padding: 30px;
    box-sizing: border-box;
    cursor: grab;
    transition: ease all 0.4s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-50%);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen:hover
    .unlockBar {
    opacity: 1;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .up {
    color: #fff;
    text-align: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .up
    .lockIcon {
    width: 18px;
    height: 14px;
    margin: 10px auto 5px auto;
    border-radius: 2px;
    background-color: #fff;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .up
    .lockIcon:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    margin: auto;
    width: 10px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .up
    .hora {
    font-size: 60px;
    font-weight: 300;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .up
    .fecha {
    font-size: 14px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .down {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .down
    .sysIcon {
    width: 20px;
    height: 20px;
    padding: 10px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    cursor: pointer;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .down
    .sysIcon
    svg {
    width: 100%;
    height: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .down
    .sysIcon
    svg
    path,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .down
    .sysIcon
    svg
    circle {
    fill: currentColor;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .unlockBar {
    position: absolute;
    bottom: 8px;
    width: 40%;
    height: 4px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    transition: ease all 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .unlockBar:hover:before {
    opacity: 1;
    transform: none;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .lockScreen
    .unlockBar:before {
    content: attr(data-msj);
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    max-width: 100px;
    margin: 0 auto;
    padding-bottom: 5px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    opacity: 0;
    transform: translateY(5px);
    transition: ease all 0.1s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    position: absolute;
    width: 100%;
    height: calc(100% - 25px);
    padding: 10px;
    box-sizing: border-box;
    cursor: grab;
    transition: ease all 0.4s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen.moveOut {
    transition-duration: 0.2s;
    transform: translateX(100%);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen.hidden {
    opacity: 0;
    visibility: hidden;
    transform: scale(1.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app {
    width: 64px;
    position: relative;
    cursor: pointer;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .notificacion,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .removeApp {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    color: #fff;
    font-size: 10px;
    border-radius: 50%;
    background-color: #de4046;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .removeApp {
    left: 0;
    right: auto;
    background-color: #e6f2ff;
    cursor: pointer;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .removeApp:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .icono {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    margin: 3px auto;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .app
    .nombre {
    height: 13px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    margin-bottom: 7px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .mainApps {
    width: 100%;
    max-width: 256px;
    height: calc(100% - 25px - 85px);
    margin: 0 auto;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    height: 100%;
    transition: ease all 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    min-width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app {
    height: 76px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.widgetFull {
    width: 100%;
    height: calc(76px * 2);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.widgetFull
    .icono {
    width: 236px;
    height: calc(100% - 26px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .eventos {
    width: calc(100% - 112px);
    font-size: 12px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper {
    width: 112px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .mesName {
    color: #d24f54;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaHeader,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaContent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaHeader
    > *,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaContent
    > * {
    width: 16px;
    text-align: center;
    font-size: 8px;
    font-weight: 600;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaHeader {
    margin: 5px auto;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaContent
    .diaNum {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 16px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app[data-app="widgetFullCalendario"]
    .icono
    .calendarioWrapper
    .mes
    .calendarioTabla
    .tablaContent
    .diaNum.activo {
    color: #fff;
    background-color: #d24f54;
    border-radius: 50%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.calendarioDinamico
    .fechaWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.calendarioDinamico
    .fechaWrapper
    .diaNom {
    color: #d24f54;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.calendarioDinamico
    .fechaWrapper
    .diaNum {
    color: #000;
    font-size: 22px;
    font-weight: 300;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    padding: 3px;
    background-color: #000;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero {
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 10px;
    height: calc(50% - 1px);
    color: #000;
    font-size: 5px;
    font-weight: 600;
    text-align: center;
    transform-origin: bottom;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(1) {
    transform: rotate(30deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(1):before {
    transform: rotate(-30deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(2) {
    transform: rotate(60deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(2):before {
    transform: rotate(-60deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(3) {
    transform: rotate(90deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(3):before {
    transform: rotate(-90deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(4) {
    transform: rotate(120deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(4):before {
    transform: rotate(-120deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(5) {
    transform: rotate(150deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(5):before {
    transform: rotate(-150deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(6) {
    transform: rotate(180deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(6):before {
    transform: rotate(-180deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(7) {
    transform: rotate(210deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(7):before {
    transform: rotate(-210deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(8) {
    transform: rotate(240deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(8):before {
    transform: rotate(-240deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(9) {
    transform: rotate(270deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(9):before {
    transform: rotate(-270deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(10) {
    transform: rotate(300deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(10):before {
    transform: rotate(-300deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(11) {
    transform: rotate(330deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(11):before {
    transform: rotate(-330deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(12) {
    transform: rotate(360deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:nth-child(12):before {
    transform: rotate(-360deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .numeros
    .numero:before {
    content: attr(data-num);
    display: block;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #000;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla.hora
    .barra {
    animation-duration: 21600s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla.hora
    .barra:before {
    height: calc(50% - 10px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla.minutos
    .barra {
    animation-duration: 3600s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla.segundos
    .barra:before {
    background-color: #d24f54;
    bottom: 40%;
    height: calc(60% - 4px);
    animation-duration: 60s;
    animation-timing-function: steps(60);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla
    .barra {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: relojAnalogico 60s infinite linear;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperApps
    .grupo
    .app.relojDinamico
    .relojWrapper
    .reloj
    .manecillas
    .manecilla
    .barra:before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 1px;
    height: calc(50% - 4px);
    background-color: #000;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperDots {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperDots
    .dot {
    width: 8px;
    height: 8px;
    margin: 5px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .wrapperDots
    .dot.activo {
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .appScreen
    .deckApps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 10px 5px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    position: absolute;
    width: 100%;
    height: calc(100% - 25px);
    padding: 10px;
    box-sizing: border-box;
    cursor: grab;
    transition: ease all 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter.hidden {
    transform: translateX(-100%);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .block:not(:first-child) {
    margin-top: 15px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .block.midd {
    width: 48%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action:first-child {
    padding-top: 0;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action:last-child {
    padding-bottom: 0;
    border: 0;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action
    .icono {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border-radius: 10px;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action
    .textos {
    width: calc(100% - 45px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action
    .textos
    p {
    font-size: 10px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .actions
    .action
    .textos
    p.actionName {
    color: #000;
    font-size: 11px;
    font-weight: 600;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .eventos {
    flex-direction: column-reverse;
    align-items: flex-start;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .eventos
    .txt {
    padding: 15px 0;
    font-size: 12px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .eventos
    .fechaWrapper
    .diaNom {
    color: #d24f54;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .eventos
    .fechaWrapper
    .diaNum {
    color: #000;
    font-size: 22px;
    font-weight: 300;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo {
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo:after {
    content: attr(data-carga) "%";
    color: #000;
    font-size: 30px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo
    .iconoWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 3px solid rgba(0, 0, 0, 0.3);
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo
    .iconoWrapper:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #67ba6e;
    border-left-color: transparent;
    border-top-color: transparent;
    transform: rotate(-35deg);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo
    .iconoWrapper
    svg {
    width: 20px;
    height: 20px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo
    .iconoWrapper
    svg
    path,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .bateriaInfo
    .iconoWrapper
    svg
    circle {
    fill: none;
    stroke: #1b1b1b;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla {
    justify-content: space-between;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .timepo {
    width: 100%;
    color: #000;
    font-size: 20px;
    text-align: left;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .app {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 48%;
    margin-top: 10px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .app
    .icono {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 7px;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .app
    .textos {
    width: calc(100% - 35px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .app
    .textos
    p {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .tiempoPantalla
    .app
    .textos
    p.actionName {
    color: #000;
    font-size: 11px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetCenter
    .contenido
    .editButton {
    margin: 20px auto 0 auto;
    padding: 4px 12px;
    color: #000;
    font-size: 12px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: ease transform 0.2s, ease background-color 0.3s 0.2s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen.hidden {
    transform: translateY(100%);
    background-color: transparent;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen.hidden
    .wrapper:before {
    opacity: 0;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper {
    background-color: #eeeeee;
    width: 100%;
    height: 90%;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper:before {
    content: "";
    position: absolute;
    left: 50%;
    width: 30px;
    height: 4px;
    border-radius: 20px;
    background-color: #b2b2b2;
    transform: translateX(-50%);
    transition: ease all 0.5s 0.5s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .buscador {
    color: #666;
    background-color: #e2e2e2;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper
    .widget {
    width: 48%;
    margin-bottom: 15px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper
    .widget.full {
    width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper
    .widget
    .preview {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    min-height: 110px;
    padding: 10px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper
    .widget
    .preview:before {
    content: "A widget would go here but I didn't finish it XD";
    display: block;
    width: 100%;
    font-size: 10px;
    text-align: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .widgetScreen
    .wrapper
    .widgetWrapper
    .widget
    .nombre {
    margin-top: 5px;
    color: #000;
    font-size: 10px;
    text-align: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    cursor: grab;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) all 0.5s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-100px);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconWrapper-wX2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    border-radius: 20px;
    color: #fff;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconWrapper-wX2.padding {
    padding: 10px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 25px;
    height: 25px;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    cursor: pointer;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.full {
    width: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.lampara.activo {
    background-color: rgba(255, 255, 255, 0.9);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.lampara.activo
    svg {
    color: #3777e4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.grabarPantalla.activo {
    background-color: rgba(255, 255, 255, 0.9);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.grabarPantalla.activo
    svg {
    color: red;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem.grabarPantalla.activo
    svg
    circle.filled {
    transform-origin: center;
    animation: grabarPantalla 1s linear infinite;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg {
    width: 25px;
    height: 25px;
    min-width: 25px;
    color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    path,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    circle,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    rect {
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-miterlimit: 10;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    path.filled,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    circle.filled,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconItem
    svg
    rect.filled {
    stroke: none;
    fill: currentColor;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon {
    cursor: pointer;
    margin: 5px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon.activo
    .ico {
    background-color: #3777e4;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon.modoVuelo.activo
    .ico {
    background-color: #ff8e00;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon.datosCelulares.activo
    .ico {
    background-color: #00dc54;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon
    .ico {
    width: 16px;
    height: 16px;
    padding: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: ease all 0.3s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon
    .ico
    svg {
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon
    .ico
    svg
    path {
    fill: currentColor;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .iconsGroup
    .icon
    .txt {
    display: none;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg {
    align-content: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    p {
    text-align: center;
    font-size: 14px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    p.artistName {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    .icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    margin-top: 20px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    .icons
    .icon {
    width: 20px;
    height: 20px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    .icons
    .icon
    svg {
    width: 100%;
    height: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .musicWdg
    .icons
    .icon
    svg
    path {
    fill: currentColor;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .actionIcon {
    transition: ease all 0.3s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .actionIcon.activo {
    background-color: rgba(255, 255, 255, 0.9);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .actionIcon.activo.lockOrientacion
    .lockIcon {
    background-color: #d24f54;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .actionIcon.activo.lockOrientacion
    .lockIcon:before {
    border-color: #d24f54;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .actionIcon.activo.lockOrientacion
    svg {
    color: #d24f54;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .lockIcon {
    position: absolute;
    width: 8px;
    height: 6px;
    border-radius: 2px;
    background-color: #fff;
    margin-right: 2px;
    margin-top: 4px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .lockIcon:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 6px;
    border-radius: 10px;
    border: 2px solid #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .moon.activo
    svg
    path {
    fill: #7c517c;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .moon
    svg
    path {
    fill: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .duplicate {
    flex-wrap: nowrap;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .displayOptions
    .duplicate
    p {
    font-size: 10px;
    margin-left: 10px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .fullBars
    .fullBar {
    align-content: flex-end;
    height: calc(100% - 30px);
    overflow: hidden;
    cursor: default;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .fullBars
    .fullBar.volumen:before {
    height: 45%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .fullBars
    .fullBar:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .fullBars
    .fullBar
    svg {
    color: rgba(0, 0, 0, 0.4);
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup {
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin-bottom: 20px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup
    .icono {
    width: 25px;
    height: 25px;
    margin: 10px auto;
    color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup
    .icono
    svg {
    width: 100%;
    height: 100%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup
    .icono
    svg
    path,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup
    .icono
    svg
    circle {
    fill: none;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .content
    .textGroup
    .link {
    display: inline-block;
    margin-top: 5px;
    color: #3777e4;
    cursor: pointer;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .hiddenCC {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25px;
    text-align: center;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .controlCenter
    .hiddenCC:before {
    content: "";
    display: inline-block;
    width: 150px;
    height: 4px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp {
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding-top: 25px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    transition: ease all 0.2s;
    cursor: grab;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp:hover:after {
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp:after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 120px;
    height: 4px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);
    transition: ease all 0.5s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp.hidden {
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 50%;
    pointer-events: none;
    transition-duration: 0.3s;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camIco {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camIco
    svg {
    width: 50%;
    height: 50%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camIco
    svg
    path {
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar
    .chevronUp
    svg,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar
    .flash
    svg,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar
    .circles
    svg {
    width: 80%;
    height: 80%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar
    .flash,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .topBar
    .circles {
    background-color: transparent;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 400px;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea:after {
    content: "";
    position: absolute;
    z-index: 1;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea:before {
    width: calc(100% / 3);
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea:after {
    width: 100%;
    height: calc(100% / 3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .camaraArea
    video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 30px;
    overflow: hidden;
    position: relative;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara:before,
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara:after {
    content: "";
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 1;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara:before {
    left: 0;
    background: linear-gradient(90deg, #000, transparent);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara:after {
    right: 0;
    background: linear-gradient(90deg, transparent, #000);
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara
    .modo {
    min-width: max-content;
    margin: 0 10px;
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .modosCamara
    .modo.activo {
    color: #a69c5e;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .obturadorArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .obturadorArea
    .imgPreview {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: red;
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .obturadorArea
    .obturador {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .obturadorArea
    .obturador:before {
    content: "";
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid #000;
    border-radius: 50%;
  }
  .iphoneMock
    .container
    .iphone
    .bordeColor
    .bordeNegro
    .mainScreen
    .camaraApp
    .obturadorArea
    .camIco {
    width: 30px;
    height: 30px;
  }
  .iphoneMock .container .iphone .logo {
    width: 80px;
    height: 80px;
    position: relative;
  }
  .iphoneMock .container .iphone .logo svg {
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.3);
  }
  .iphoneMock .container .iphone .logo svg path {
    fill: currentColor;
  }
  @media only screen and (max-width: 700px) {
    .iphoneMock .container .interactionInfo p,
    .iphoneMock .container .interactionInfo h1 {
      text-align: center;
    }
    .iphoneMock .container .interactionInfo .botones {
      flex-direction: column;
      justify-content: center;
    }
    .iphoneMock .container .interactionInfo .botones .boton {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;