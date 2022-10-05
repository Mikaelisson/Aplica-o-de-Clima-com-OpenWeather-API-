import React from "react";

function HumidityIcon(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M192 496c97.2 0 176-78.8 176-176 0-74.1-102.3-230.6-150.9-300.7-12.3-17.7-37.8-17.7-50.1 0C118.3 89.4 16 245.9 16 320c0 97.2 78.8 176 176 176zm-80-176c0 44.2 35.8 80 80 80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112 0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
    </svg>
  );
}

export default HumidityIcon;