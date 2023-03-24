import './App.css';
import { useEffect, useState, useContext } from "react";
import UserTable from './components/UserTable';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { PaginationContext } from './context/PaginationContext';

function App() {
  //state to hold the data
  const [userData, setUserData] = useState([]);
  const usersPerPage = 10;

  const {currentPage, setCurrentPage} = useContext(PaginationContext);

  /*
    Single data from API
      email: "aaron@mailinator.com"
      id: "1"
      name: "Aaron Miles"
      role: "member"
  */

  const fetchData = () => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  //Calculating the user ids
  const lastUserId = currentPage * usersPerPage;
  const firstUserId = lastUserId - usersPerPage;
  const currentPageUsers = userData.slice(firstUserId, lastUserId);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    //call the api
    fetchData();
  }, []);

  useEffect(() => {

  },[currentPage])

  return (
    <div className="app">
      <PaginationContext>
      <SearchBar />
      <UserTable
        users={currentPageUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Pagination postsPerPage={10} totalPosts={47} paginate={paginate} />
      </PaginationContext>
    </div>
  );
}

export default App;
