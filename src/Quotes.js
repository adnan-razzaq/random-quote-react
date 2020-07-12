import React from "react";

export default function Quotes() {
  return (
    <div id="quote-box">
      <div className="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tempore, consequatur esse amet perspiciatis assumenda minus
          consectetur enim? Quia, consequatur.
        </p>
      </div>
      <div id="author">John doe</div>
      <div id="buttons">
        <div className="socialmedia">
          <a href="#" id="tweet-quote">
            <span>
              <img src="" alt="" />
            </span>
          </a>
          <a href="#" id="tumblir-quote">
            <span>
              <img src="" alt="" />
            </span>
          </a>
        </div>
        <button id="btn">Submit</button>
      </div>
    </div>
  );
}
