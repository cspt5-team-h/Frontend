import React, { useState, useEffect } from "react";

import { Graph } from "react-d3-graph";
import './map.css'
const myConfig = {
//   nodeHighlightBehavior: true,
//   height: 240,
//   width: 400,
//   staticGraph: true,
//   staticGraphWithDragAndDrop: false,
  
//   d3: {
//     alphaTarget: 0,
//     gravity: -400,
//     linkLength: 500,
//     linkStrength: 1,
    
//   },
//   node: {
//     renderLabel: false,
//     color: "#35ff69",
//     size: 100,
//     highlightStrokeColor: "SAME",
    
    
//   },
//   link: {
//     color: "#35ff69",
//     highlightColor: "SAME",
//     transformOrigin: 20
//   }



"automaticRearrangeAfterDropNode": true,
  "collapsible": false,
  "directed": true,
  "focusAnimationDuration": 0.75,
  "focusZoom": 1,
  "height": 400,
  "highlightDegree": 1,
  "highlightOpacity": 1,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": false,
  "panAndZoom": true,
  "staticGraph": false,
  "staticGraphWithDragAndDrop": false,
  "width": 800,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -100,
    "linkLength": 800,
    "linkStrength": 20,
    "disableLinkForce": false
  },
  "node": {
    "color": "#35ff69",
    "fontColor": "yellow",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "SAME",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "highlightStrokeColor": "SAME",
    "highlightStrokeWidth": "SAME",
    "labelProperty": "id",
    "mouseCursor": "pointer",
    "opacity": 4,
    "renderLabel": false,
    "size": 200,
    "strokeColor": "blue",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "none",
    "transformOrigin" : 20 ,
    "transform": 40
  },
  "link": {
    "color": "#d3d3d3",
    "fontColor": "red",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "SAME",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "labelProperty": "label",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "semanticStrokeWidth": true,
    "strokeWidth": 1.5,
    "markerHeight": 6,
    "markerWidth": 6
  }


  
};

const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
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
    console.log(mapRooms)
  const graph = {
    nodes: [
        {id: `${gameInfo.name}`},
        {id: `${gameInfo.title}`},
        // {id: `${mapRooms.title}`},
        
        
      ],
      links: [
        {source: `${gameInfo.name}`, target: `${gameInfo.title}`},
        // {source: `${gameInfo.description}`, target: `${mapRooms.title}`},
        
      ]



  };
  return (
    <div className="node">
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
