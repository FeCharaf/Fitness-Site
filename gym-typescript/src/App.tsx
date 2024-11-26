import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
