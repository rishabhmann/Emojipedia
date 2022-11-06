import React from "react";

function TermAvatar(props) {
  return (
    <span className="emoji" role="img" aria-label={props.name}>
      {props.avatar}
    </span>
  );
}

export default TermAvatar;
