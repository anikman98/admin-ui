import './App.css';
import Main from './Pages/Main';
import PaginationState from './context/PaginationContext';
import UserState from './context/UserContext';

function App() {


  return (
      <PaginationState>
        <UserState>
          <Main/>
        </UserState>
      </PaginationState>
  );
}

export default App;
