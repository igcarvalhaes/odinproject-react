import "./App.css";
import { Greeting } from "./Greeting";
import { Food } from "./components/Food";

function App() {
  return (
    <>
      <div>
        <h1>My Favorite Foods</h1>
        <div>
          <Food />
        </div>
      </div>
    </>
  );
}

export default App;
