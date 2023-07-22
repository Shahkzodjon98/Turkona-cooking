import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n/index";
import { BrowserRouter } from "react-router-dom";

import Loader from "./components/Loader";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="w-[100%] h-[100%] flex items-center justify-center relative top-56 ">
          <Loader />
        </div>
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
