import React from "react";
import "./OtherContent.css";

function OtherContent(props) {
  let ow_title = props.ow_title;
  let ow_by = props.ow_by;
  let ow_role = props.ow_role;
  let ow_year = props.ow_year;
  let ow_image = props.ow_image;
  let ow_url = props.ow_url;

  return (
    <div>
      <div className="oc-container">
        <div className="oc-text">
          <div className="key-words-oc">
            <h2>{ow_title}</h2>
            <h4>{ow_by}</h4>
            <h5>Role: {ow_role}</h5>
            <h3>{ow_year}</h3>
          </div>
        </div>
        <div className="oc-image">
          <a href={ow_url}><img src={ow_image} alt={ow_title} target="_blank" rel="noreferrer"></img></a>
        </div>
      </div>
      <hr className="other-divider"></hr>
    </div>
  );
}

export default OtherContent;
