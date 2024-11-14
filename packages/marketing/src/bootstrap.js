import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createRoot } from "react-dom/client";
// Mount function to start up the app
const mount = (el) => {
  //   const root = createRoot(el);
  //   root.render(<h1>Hi There</h1>);
  ReactDOM.render(<App />, el);
};

// if we are in development and in isolation call mount immediaely
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
//we ree running hrough container and
// we ahould export the mount funtion
export { mount };
