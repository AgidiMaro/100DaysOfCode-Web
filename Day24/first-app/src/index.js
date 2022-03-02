import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((item) => {
        //passing array as an object
        // return <Book key={item.id} bookProp={item} />;
        // using the spread operator
        return <Book key={item.id} {...item} />;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
