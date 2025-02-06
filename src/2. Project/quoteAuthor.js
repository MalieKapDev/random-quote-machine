import React from "react";

const QuoteAuthor = ({ author }) => {
  return (
    <div className="quote-author">
      - <span>{author}</span>
    </div>
  );
};

export default QuoteAuthor;
