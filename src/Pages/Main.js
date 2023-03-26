import React from 'react'
import { useEffect, useState, useContext } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { PaginationContext } from '../context/PaginationContext';

const Main = () => {
  //state to hold the data
  const [userData, setUserData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const usersPerPage = 10;
  const [currentPageUsers, setCurrentPageUsers] = useState([]);
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

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    const tempUser = userData.filter((user) => user.id !== id);
    setUserData(tempUser)
  };

  const handleCheckbox = (id) => {
    selectedUsers.includes(id) ? setSelectedUsers(prev => prev.filter(item => item !== id)) : setSelectedUsers([...selectedUsers, id]);
  };

  const handleSelectAll = (checked) => {
    if(checked){
      let temp = [];
      currentPageUsers.map((user) => {
          temp.push(user.id);
          return user;
      });
      setSelectedUsers(temp);
    }else{
      setSelectedUsers([]);
    }
  };

  const fetchCurrentUsers = () => {
    //Calculating the user ids
    const lastUserId = currentPage * usersPerPage;
    const firstUserId = lastUserId - usersPerPage;
    setCurrentPageUsers(userData.slice(firstUserId, lastUserId) || []);
  }

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
        users={currentPageUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCheckbox={handleCheckbox}
        handleSelectAll={handleSelectAll}
        selectedUsers={selectedUsers}
      />
      <div className="footer">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <Pagination
          postsPerPage={usersPerPage}
          totalPosts={userData.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Main