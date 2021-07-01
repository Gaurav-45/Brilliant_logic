import './App.css';
import Header from "./components/Header";
import Logic from "./components/Logic";
import Introduction from './components/Introduction';
import RationalDetective from './components/RationalDetective';
import PuzzleRiddles from './components/PuzzleRiddles';
import MultiThink from './components/MultiThink';
import Competetive from './components/Competetive';
import LogicMachine from './components/LogicMachine';
import KnightsKnaves from './components/KnightsKnaves';
import NextSteps from './components/NextSteps';

function App() {
  return (
    <div className="App">
      <Header/>
      <Logic/>
      <Introduction/>
      <RationalDetective/>
      <PuzzleRiddles/>
      <MultiThink/>
      <Competetive/>
      <LogicMachine/>
      <KnightsKnaves/>
      <NextSteps/>
    </div>
  );
}

export default App;
