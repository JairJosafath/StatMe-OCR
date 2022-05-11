import logo from "./logo.svg";
import "rsuite/dist/rsuite.min.css";
import Button from "rsuite/Button";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { FlexboxGrid, Footer } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <FlexboxGrid>
        <FlexboxGridItem colspan={4}>
          <div
            style={{
              background: "#1a1d24",
              height: 400,
            }}
          ></div>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={16}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/news" element={<News />} /> */}
            </Routes>
          </BrowserRouter>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={4}>
          <div
            style={{
              background: "#1a1d24",
              height: 400,
            }}
          ></div>
        </FlexboxGridItem>
      </FlexboxGrid>
      <Footer></Footer>
    </>
  );
};

export default App;
