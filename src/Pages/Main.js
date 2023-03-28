import React from "react";
import { useEffect, useContext } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { PaginationContext } from "../context/PaginationContext";
import { UserContext } from "../context/UserContext";
import { SearchContext } from "../context/SearchContext";

const Main = () => {
  //state to hold the data
  const {
    userData,
    setUserData,
    handleDeleteAll,
    fetchCurrentUsers,
    currentUserCount
  } = useContext(UserContext);
  const { currentPage } = useContext(PaginationContext);
  const { searchQuery } = useContext(SearchContext);
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
      });
  };

  useEffect(() => {
    fetchCurrentUsers();
  }, [currentPage, userData, searchQuery]);

  useEffect(() => {
    //call the api
    fetchData();
  }, []);

  return (
    <div className="app">
      <SearchBar />
      <UserTable />
      <div className="footer">
        <button className="delete-button" onClick={handleDeleteAll}>
          Delete
        </button>
        {currentUserCount > 0 ? (
          <Pagination />
        ) : (
          <></>
        )}
        <button className="temp-button">Tempbtn</button>
      </div>
    </div>
  );
};

export default Main;
