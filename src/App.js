import './App.css';
import Main from './Pages/Main';
import PaginationState from './context/PaginationContext';

function App() {


  return (
      <PaginationState>
        <Main/>
      </PaginationState>
  );
}

export default App;
