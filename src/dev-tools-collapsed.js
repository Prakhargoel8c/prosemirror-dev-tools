import React from "react";
import styled from "styled-components";

const FloattingButton = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #000;
  box-shadow: 0 0 30px rgba(0, 0, 0, .3);
  border-radius: 50%;
  padding: 6px 8px;
  transition: opacity .3s;

  &:hover {
    opacity: .7;
    cursor: pointer;
  }

  img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -2px;
  }
`;

export default function DevToolsCollapsed(props) {
  return (
    <FloattingButton onClick={props.onClick}>
      <img
        src="data:image/svg+xml,<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?><svg xmlns:svg=&quot;http://www.w3.org/2000/svg&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;64&quot; height=&quot;64&quot; viewBox=&quot;0 0 64 64&quot; version=&quot;1.1&quot;><g style=&quot;fill:white;stroke:none&quot;><path d=&quot;M 9.75,49.00 C 6.14,44.29 4,38.39 4,32 4,16.53 16.53,4 32,4 47.46,4 60,16.53 60,32 60,47.46 47.46,60 32,60 30.02,60 28.09,59.79 26.23,59.40 29.42,58.36 35.47,55.78 39.43,50.29 41.85,46.84 44,41.92 44,36 l 0,-9.5 c 0,-6 -5.08,-10.77 -11.16,-10.77 -3.47,0 -6.57,1.56 -8.65,4.02 C 24.17,19.75 21,22.5 20,33 L 9.75,49.00 Z M 29.64,39 c 0.15,0.68 0.25,1.44 0.30,2.28 0,0 0.59,8.00 -9.05,13.94 C 12,59.5 4,58 4,58 l -1.5,2.5 c 1,0.5 3,1.02 5,1 C 16,61.52 21.42,58.06 21.42,58.06 31.61,52.07 30.99,43.97 30.99,43.97 30.87,41.83 30.37,40.22 29.64,39 Z m 0.22,-4.97 c -0.01,-0.00 -0.02,-0.00 -0.03,-0.01 -0.19,-0.08 -0.37,-0.18 -0.55,-0.28 -1.24,-0.71 -2.46,-1.93 -3.38,-3.52 -1.14,-1.98 -1.55,-4.08 -1.27,-5.71 0.24,-2.22 2.10,-3.96 4.39,-3.96 1.72,0 3.21,1.02 3.94,2.46 0.73,-1.44 2.21,-2.46 3.94,-2.46 2.28,0 4.15,1.73 4.39,3.96 0.28,1.62 -0.12,3.73 -1.27,5.71 -0.91,1.59 -2.13,2.81 -3.38,3.52 -0.17,0.10 -0.35,0.19 -0.55,0.28 -0.01,0.00 -0.02,0.00 -0.03,0.01 -0.89,0.39 -1.95,0.62 -3.10,0.62 -1.14,0 -2.21,-0.23 -3.10,-0.62 z m 8.48,-9.47 c -0.48,-0.48 -1.18,-0.63 -1.84,-0.51 -0.82,0.15 -1.21,0.60 -1.45,1.12 l -0.01,-0.01 -2.04,3.74 -2.04,-3.74 -0.01,0.01 c -0.24,-0.51 -0.63,-0.97 -1.45,-1.12 -0.65,-0.11 -1.36,0.02 -1.84,0.51 -0.85,0.86 -0.86,2.29 -0.03,3.17 0.16,0.17 0.35,0.30 0.55,0.41 l -0.01,0.01 3.92,2.42 0.47,0.29 c 0.27,0.16 0.61,0.16 0.88,0 l 0.47,-0.29 3.92,-2.42 -0.01,-0.01 c 0.19,-0.10 0.38,-0.23 0.55,-0.41 0.82,-0.87 0.81,-2.31 -0.03,-3.17 z&quot;/></g></svg>"
      />
    </FloattingButton>
  );
}
