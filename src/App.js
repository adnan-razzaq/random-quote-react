import React, { useState, useEffect } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import "./App.css";

// get api
// create layout
//event lsiteneres
//styling
//complete stories

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
function App() {
  const [all, setall] = useState([]);
  const [quotes, setquotes] = useState("");
  const [author, setauthor] = useState("");
  const [color, setcolor] = useState("blue");
  useEffect(() => {
    const ajax = async () => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };

    ajax().then((data) => {
      const dataquotes = data.quotes;

      setall(dataquotes);
    });
  }, []);
  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#03A9F4",
    "#009688",
  ];
  const handleclick = () => {
    let random = Math.floor(Math.random() * all.length);
    let randomcolor = Math.floor(Math.random() * colors.length);
    let bg = colors[randomcolor];
    setcolor(bg);

    let data = all[random];
    const { quote, author } = data;

    setquotes(quote);
    setauthor(author);
  };

  return (
    <div
      className="container-fluid "
      id="quote-box"
      style={{ background: color, fontWeight: "bold" }}
    >
      <div className="wrapper  d-flex justify-content-center  align-items-center  ">
        <div className=" col-6 box bg-light p-5">
          <FaQuoteLeft />
          <p id="text" style={{ color: color }}>
            {quotes}
          </p>
          <cite
            id="author"
            style={{ color: color }}
            className="d-block text-right"
          >
            {author}
          </cite>

          <div className="d-flex justify-content-between mt-3">
            <a
              id="tweet-quote"
              className="btn btn-primary"
              href={`https://twitter.com/intent/tweet?text=${quotes}-${author}`}
            >
              <FaTwitter />
              Twitter
            </a>
            <button
              id="new-quote"
              onClick={handleclick}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
