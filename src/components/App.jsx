import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

// 2. the function we passed as paramter needs to be created
// and pass any variable i.e entry, which Means when mapping fxn
// loops through JSON arrays, and key value pairs are assigned
function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {/* 1. by creating mapping function, 
      we have to pass function as parameter */}
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
