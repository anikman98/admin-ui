import React from 'react'
import { useEffect, useContext } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { PaginationContext } from '../context/PaginationContext';
import { UserContext } from '../context/UserContext';

const Main = () => {
  //state to hold the data
  const {
    userData,
    setUserData,
    usersPerPage,
    handleDeleteAll,
    fetchCurrentUsers,
  } = useContext(UserContext);
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
        // console.log(data);
      });
  };



  useEffect(()=> {
    fetchCurrentUsers();
  },[currentPage, userData]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  useEffect(() => {
    //call the api
    fetchData();
  }, []);

  return (
    <div className="app">
      <SearchBar />
      <UserTable
      />
      <div className="footer">
        <button className="delete-button" onClick={handleDeleteAll}>
          Delete
        </button>
        <Pagination
          postsPerPage={usersPerPage}
          totalUsers={userData.length}
          paginate={paginate}
        />
        <button className='temp-button'>Tempbtn</button>
      </div>
    </div>
  );
}

export default Main