import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CardContainer from "./components/CardContainer/CardContainer";
import Socials from './components/Socials/Socials';

function App() {
  return (
    <div className="App">
        <Header/>
        <CardContainer/>
        <Socials/>
    </div>
  );
}

export default App;
