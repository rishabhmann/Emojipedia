import React from "react";
import Term from "./Term";

import emojipedia from "../emojipedia";

function createTerm(term) {
  return (
    <Term
      key={term.id}
      avatar={term.emoji}
      name={term.name}
      description={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createTerm)}</dl>
    </div>
  );
}

export default App;
