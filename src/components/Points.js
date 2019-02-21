import React from 'react';
import './Points.css';
import PropTypes from "prop-types";

function Points(props){
  return (
    <div id="pointsDiv">
      <p>Bits: {props.points}</p>
        <div onClick={props.clickPoints} id="clickDiv">
            <p id="clickText">Click Here</p>
        </div>
    </div>
  );
}

Points.propTypes = {
    points: PropTypes.number,
    clickPoints: PropTypes.func
}
export default Points;