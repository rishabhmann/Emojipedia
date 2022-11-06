import React from "react";
import TermName from "./TermName";
import TermDescription from "./TermDescription";
import TermAvatar from "./TermAvatar";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <TermAvatar avatar={props.avatar} name={props.name} />
        <TermName name={props.name} />
      </dt>
      <dd>
        <TermDescription description={props.description} />
      </dd>
    </div>
  );
}

/*
Term consist of term-name, term-img , term description
*/

export default Term;
