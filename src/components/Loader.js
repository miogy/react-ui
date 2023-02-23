import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <StyledLoder>
      <div className="loader_container">
        <div className="loading">
          <span className="loader"> </span>
        </div>
      </div>
    </StyledLoder>
  );
}

export default Loader;

const StyledLoder = styled.div`
  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff,
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
        1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }

  .loader_container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 30;
    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .loader {
        display: block;
        font-size: 12px;
        width: 1em;
        height: 1em;
        border-radius: 100%;
        position: relative;
        text-indent: -9999em;
        animation: mulShdSpin 1.3s infinite linear;
        transform: translateZ(0);
      }
    }
  }
`;
