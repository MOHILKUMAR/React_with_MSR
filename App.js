// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abcs" },
//   "Hello World! by React bhaiya"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading) it will returns as a object
// {id: "heading", xyz : "abcs"}  props

// ---------------------------------------------------------

// nested Element in React
/*
*
*
 <div id="parent">
     <div id="child">
        <h1></h1>
     </div>
</div>
*
*
* ReactElement(Object) => HTML(Browser understands)
*
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm  H1 tag")
//   )
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/*
*siblings
*
 <div id="parent">
     <div id="child">
        <h1>I'm H1 tag</h1>
         <h2>I'm H2 tag</h2>
     </div>
</div>
*
*
*
* */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm  H1 tag"),
//     React.createElement("h2", {}, "I'm  H2 tag"),
//   ])
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/*
*
*
 <div id="parent">
     <div id="child1">
        <h1>I'm H1 tag</h1>
         <h2>I'm H2 tag</h2>
     </div>
      <div id="child2">
        <h1>I'm H1 tag</h1>
         <h2>I'm H2 tag</h2>
     </div>
</div>
*
*
*
* */
// core of react 

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is namaste React"),
    React.createElement("h2", {}, "I'm  mohil kumar"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm  H sfsf 3tag"),
    React.createElement("h2", {}, "I'm  H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//JSX 