import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import { App } from "./app/App";

import "../src/styles/style.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
