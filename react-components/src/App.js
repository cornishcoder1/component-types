import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
// import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="John" /> */}
      <StatefulGreetingWithCallback name="Joshua" greeting="I'm a stateful class component" />
      {/* <HooksCounter name="Mike" /> */}
    </div>
  );
}

export default App;
