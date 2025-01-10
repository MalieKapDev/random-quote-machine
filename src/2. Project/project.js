import React from "react";
import "./project.css";
import RandomQuoteMachine from "./randomQuoteMachine";

function Project() {
  return (
    <div className="project-container">
      <div className="card">
        <h5 className="card-header" style={{ backgroundColor: "#e9ecef" }}>
          💻 Random Quote Machine
        </h5>
        <div className="card-body">
          <h5 className="card-title">A little about this project:</h5>
          <p className="card-text">
            The Random Quote Machine, built with React, delivers a delightful
            and engaging way to discover inspiring and thought-provoking quotes.
            Users enjoy an intuitive interface, responsive design, and instant
            quote generation, ensuring a seamless and enjoyable experience. Its
            modern aesthetics, mobile-friendly layout, and endless variety of
            quotes make it a perfect tool for boosting creativity, motivation,
            and daily inspiration.
          </p>
          <p className="card-text">
            Looking for a behind-the-scenes look at how I rebuilt my Random
            Quote Machine? Discover the design decisions, challenges, and
            features that make it a standout project. Read my blog post{" "}
            <a
              href="https://codewithmalie.com/random-quote-machine-project-case-study/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            and see how I turned this idea into a portfolio-worthy application.
          </p>
          <p className="card-text">
            Check out the code for building this Random Quote Machine on{" "}
            <a
              href="https://github.com/MalieKapDev/random-quote-machine"
              target="_blank"
              rel="noreferrer"
            >
              GitHub!
            </a>{" "}
            Don’t forget to give it a ⭐ if you find it helpful, and follow me
            for more projects like this!
          </p>
        </div>
      </div>
      <RandomQuoteMachine />
    </div>
  );
}

export default Project;
