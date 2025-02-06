const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.REACT_APP_QUOTES_API_KEY,
      },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    setQuote({ text: data[0].quote, author: data[0].author });
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};
