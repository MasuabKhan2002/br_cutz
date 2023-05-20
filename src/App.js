import Button from '@mui/material/Button'
import GetBarbers from './firebase/getbarber';

function App() {
  return (
    <div className="App">
      <Button variant='contained'>Hello World</Button>
      <GetBarbers></GetBarbers>
    </div>
  );
}

export default App;
