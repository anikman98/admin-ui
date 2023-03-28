import './App.css';
import Main from './Pages/Main';
import PaginationState from './context/PaginationContext';
import UserState from './context/UserContext';
import SearchState from './context/SearchContext';

function App() {


  return (
    <PaginationState>
      <SearchState>
        <UserState>
          <Main />
        </UserState>
      </SearchState>
    </PaginationState>
  );
}

export default App;
