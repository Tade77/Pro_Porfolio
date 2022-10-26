import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";

import "./index.css";

const App = ({}) => {
  const [theme, setTheme] = React.useState("light");

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  React.useEffect(() => {
    document.body.className = theme;
    // document.body.tagName("nav").className = theme;
  }, [theme]);

  React.useEffect(() => {
    document.body.className = theme;
    // document.body.tagName("nav").className = theme;
  }, [theme]);

  return (
    <div>
      <Home handleToggle={handleToggle} theme={theme} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
