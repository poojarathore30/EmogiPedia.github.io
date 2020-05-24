import React from "react";
import emoji from "../emojipedia";
import Term from "./term";

let emojipedia = emoji();
function create(emogiTerm) {
  return (
    <Term
      key={emogiTerm.id}
      emogi={emogiTerm.emoji}
      name={emogiTerm.name}
      meaning={emogiTerm.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(create)}</dl>
      <p>Made with ❤ Copyright @Pooja Rathore </p>
    </div>
  );
}
