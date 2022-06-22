import { Styled } from "./styled";

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
