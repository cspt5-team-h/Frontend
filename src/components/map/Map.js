import React, { useState, useEffect } from "react";

import { Graph } from "react-d3-graph";

const myConfig = {
  nodeHighlightBehavior: true,
  height: 240,
  width: 400,
  staticGraph: true,
  staticGraphWithDragAndDrop: false,
  d3: {
    alphaTarget: 0,
    gravity: -400,
    linkLength: 500,
    linkStrength: 1
  },
  node: {
    renderLabel: false,
    color: "#35ff69",
    size: 100,
    highlightStrokeColor: "SAME"
  },
  link: {
    color: "#35ff69",
    highlightColor: "SAME"
  }
};

const Map = ({ mapRooms, gameInfo }) => {
  const graph = {};
  return (
    <div className="sample-map-container">
      {/* WIP */}
      {/* <Graph data={graph}  config={myConfig} /> */}
    </div>
  );
};

export default Map;
