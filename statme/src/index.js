import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CustomProvider } from "rsuite";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
