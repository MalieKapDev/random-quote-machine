import React, { useState } from "react";
import QuoteText from "./quoteText";
import QuoteButtons from "./quoteButtons";
import QuoteAuthor from "./quoteAuthor";

const colors = [
  "#81EFD7",
  "#BCF0D2",
  "#A3B8CC",
  "#F8C777",
  "#EF8B80",
  "#C49CD3",
  "#C7A9AC",
  "#CFB5B9",
  "#C7C5A9",
  "#B6B490",
  "#A4CBC6",
  "#B1CEA1",
];

const QuoteBox = () => {
  const [quote, setQuote] = useState({
    text: "See today's random quote...",
    author: "",
  });
  const [lastFetchTime, setLastFetchTime] = useState(0); // Store last fetch timestamp
  const [requestCount, setRequestCount] = useState(0); // Track request count
  const [color, setColor] = useState("#81EED8"); // Default color

  const fetchQuote = async () => {
    const currentTime = Date.now();
    const timeElapsed = (currentTime - lastFetchTime) / 1000; // Convert to seconds

    if (requestCount >= 5 && timeElapsed < 60) {
      alert("You've reached the quote limit. Please try again in a minute.");
      return;
    }

    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_QUOTES_API_KEY,
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setQuote({ text: data[0].quote, author: data[0].author });

      // Update request count and last fetch time
      setRequestCount((prev) => (timeElapsed >= 60 ? 1 : prev + 1));
      setLastFetchTime(currentTime);

      // Change color randomly
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="quote-box" style={{ backgroundColor: color }}>
      <QuoteText text={quote.text} />
      <QuoteAuthor author={quote.author} />
      <QuoteButtons newQuote={fetchQuote} quote={quote} />
    </div>
  );
};

export default QuoteBox;
