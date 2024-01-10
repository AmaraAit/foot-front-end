import logo from './logo.svg';
import './App.css';
import Matchss from './components/Matchss';
import LeagueNav from './components/LeagueNav';

function App() {
  const data = [
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
    {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"}
  
  ]
  
  
  
  
  return (
    <div className="App">
      <LeagueNav/>
      <header className="App-header w-100 p-5">
      
      <div class="container text-center">
        <div class="row p-1">
          {data.map(e=><div class="col order-last">
          <Matchss championnat={e.championnat} dateMatch={e.dateMatch} equipeIn={e.equipeIn} equipeOut={e.equipeOut}/>
          </div>)}
        </div>
        </div>
        
          
      </header>
    </div>
  );
}

export default App;
