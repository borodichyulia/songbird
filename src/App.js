import { useSelector } from 'react-redux';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Button from './components/button/button-component';
import EndGame from './components/end-game/end-game.components';

function App() {
  const disabled = useSelector(state => state.changePage.disabled);
  return (
    <div>
      <Navigation />     
      {disabled ? <Home /> :  <EndGame/>}      
      <Button />
    </div>

  );
}

export default App;



