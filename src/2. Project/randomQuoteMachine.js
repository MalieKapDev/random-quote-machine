import React from "react";
import QuoteText from "./quoteText";
import QuoteButtons from "./quoteButtons";
import QuoteBox from "./quoteBox";
import QuoteAuthor from "./quoteAuthor";

import "./randomQuoteMachine.css";

const RandomQuoteMachine = () => {
  return (
    <div className="randomQuoteMachine-container">
      <h1>Hello from Random Quote Machine</h1>
      <QuoteText />
      <QuoteButtons />
      <QuoteBox />
      <QuoteAuthor />
    </div>
  );
};

export default RandomQuoteMachine;
