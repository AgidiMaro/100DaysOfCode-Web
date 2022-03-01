import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "The Midnight Library";
  const author = "Matt Haig";

  return (
    <article className="book">
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// const Title = () => <h1>The Midnight Library</h1>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Matt Haig
//   </h4>
// );
ReactDom.render(<Booklist />, document.getElementById("root"));
