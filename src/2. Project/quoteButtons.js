import React from "react";
import ShareButtons from "./shareButtons";

const QuoteButtons = ({ newQuote, quote }) => {
  return (
    <div className="buttons">
      <ShareButtons quote={quote} />
      <button className="button" id="new-quote" onClick={newQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteButtons;
