import React, { useState, useEffect } from "react";
import axios from "axios";
import { Graph } from "react-d3-graph";
import './map.css'
const myConfig = {
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: true,
  maxZoom: 5,
  minZoom: 0.1,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: true,
  staticGraphWithDragAndDrop: true,
  d3: {
    alphaTarget: 0,
    gravity: -400,
    linkLength: 180,
    linkStrength: 1
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "blue",
    highlightStrokeWidth: "SAME",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: false,
    size: 50,
    strokeColor: "none",
    strokeWidth: 2,
    svg: "",
    symbolType: "circle"
  },
  link: {
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "blue",
    highlightFontSize: 8,
    highlightFontWeight: "bold",
    labelProperty: "label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    semanticStrokeWidth: true,
    strokeWidth: 1.5
  }
};

const Map = ({ gameInfo }) => {
  const validNodes = [];
  const [mapRooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://csp5.herokuapp.com/api/adv/rooms/").then(res => {
      setRooms(res.data.rooms);
      setLoading(false);
    });
  }, []);

  mapRooms.forEach(room => {
    const directions = ["n_to", "s_to", "e_to", "w_to"];
    directions.forEach(dir => {
      if (room[dir]) {
        validNodes.push(room[dir]);
      }
    });
  });

  const southLinks = mapRooms
    .filter(room => {
      console.log(room);
      if (validNodes.includes(room.id)) {
        if (validNodes.includes(room.s_to)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.s_to
    }));

  const eastLinks = mapRooms
    .filter(room => {
      if (validNodes.includes(room.id)) {
        if (validNodes.includes(room.e_to)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.e_to
    }));

  const adjacentNodes = mapRooms.filter(room => validNodes.includes(room.id));

  const graph = {
    nodes: [
      ...mapRooms.map(room => {
        return {
          ...room,
          x: room.x * 30,
          y: room.y * -30,
          color: room.id === gameInfo.room_id ? "#090909" : "#ffbd42",
          strokeColor: room.id === gameInfo.room_id ? "#3F3F3F" : "none",
          size: room.id === gameInfo.room_id ? 350 : "same"
        };
      }),
      ...adjacentNodes.map(room => {
        return {
          ...room,
          x: room.x * 30,
          y: room.y * -30,
          color: room.id === gameInfo.room_id ? "#090909" : "#ffbd42",
          size: room.id === gameInfo.room_id ? 350 : 100,
          strokeColor: room.id === gameInfo.room_id ? "#ffbd42" : "none"
        };
      })
    ],
    links: [...southLinks, ...eastLinks]
  };

  if (loading) return <p>LOADING....</p>;
  return (
    <div className="node">
      {/* WIP */}
      <Graph id={`${gameInfo.name}`} data={graph} config={myConfig} />
    </div>
  );
};

export default Map;
