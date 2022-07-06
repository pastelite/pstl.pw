import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Background from "./components/Background";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LinkList from "./pages/LinkList";
import MyWork from "./pages/MyWork";

function App() {
  const [isZoom, setIsZoom] = useState(false);

  return (
    <>
      <Background isZoom={isZoom} />
      <div className="App text-gray-300">
        <div className="min-h-[calc(100vh-5em)] p-4 overflow-hidden flex flex-row justify-center items-center m-auto w-[calc(100vw-20px)]">
          <Routes>
            <Route path="/" element={<HomePage setIsZoom={setIsZoom} />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="works" element={<MyWork />} />
            <Route path="links" element={<LinkList/>} />
          </Routes>
        </div>
        <NavigationBar />
      </div>
    </>
  );
}

export default App;
