import React from "react";
import PropTypes from "prop-types";

export const Item = (props) => {
  return (
    <>
      <div className="categories__item set-bg"  
      style = {{
        backgroundImage: props.src

      }}>
        <h5>
          <a href="#">{props.name}</a>
        </h5>
      </div>
    </>
  );
};
