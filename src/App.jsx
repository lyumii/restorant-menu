import Filterbar from "./Filterbar";
import Header from "./Header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="border-red-400 border-2">
        <Filterbar />
      </main>
    </>
  );
}

export default App;
