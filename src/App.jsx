
import DaisyNab from "./components/DaisyNav/DaisyNab";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      <DaisyNab />
      <h1 className="text-7xl bg-yellow-800 text-center">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
