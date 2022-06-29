import './App.css';
// import FunctionalGreeting from "./components/FunctionalGreeting";
// import StatefulGreeting from "./components/StatefulGreeting";
// // import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import HooksCounter from "./components/HooksCounter";
// import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="John" /> */}
      {/* <StatefulGreetingWithCallback name="Joshua" greeting="I'm a stateful class component" /> */}
      {/* <HooksCounter name="Mike" /> */}
      {/* { <StatefulGreetingWithPrevState/> } */}
      {/* <EventBinding /> */}
      {/* <StatefulGreeting /> */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
    </div>
  );
}

export default App;
