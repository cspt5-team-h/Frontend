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

const onClickNode = function(nodeId) {
    window.alert('Clicked node ${nodeId}');
};

const onMouseOverNode = function(nodeId) {
    window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
};



const Map = ({ mapRooms, gameInfo }) => {
  const graph = {
    nodes: [
        {id: `${gameInfo.name}`},
        {id: `${gameInfo.title}`},
      ],
      links: [
          {source: `${gameInfo.name}`, target: `${gameInfo.title}`},
          
      ]



  };
  return (
    <div className="sample-map-container">
      {/* WIP */}
    <Graph
    id = {`${gameInfo.name}`}
    data={graph} 
    config={myConfig}
    onClickNode={onClickNode}
    onClickLink={onClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
         />
    </div>
  );
};

export default Map;
