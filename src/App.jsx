import React from "react";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Job from "./Components/Job";
import Value from "./Components/Value";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div className="w-[93%] m-auto">

      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
    </>
  );
}

export default App;
