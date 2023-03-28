import { createContext, useState, useContext } from "react";
import { PaginationContext } from "./PaginationContext";
import { SearchContext } from "./SearchContext";

export const UserContext = createContext();

const UserState = (props) => {
  const [userData, setUserData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const usersPerPage = 10;
  const [currentPageUsers, setCurrentPageUsers] = useState([]);
  const [editingUserID, setEditingUserID] = useState(null);
  const [currentUserCount, setCurrentUserCount] = useState(0);

  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const { searchQuery, keys } = useContext(SearchContext);


  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    const tempUser = userData.filter((user) => user.id !== id);
    setUserData(tempUser);
  };

  const handleCheckbox = (id) => {
    selectedUsers.includes(id)
      ? setSelectedUsers((prev) => prev.filter((item) => item !== id))
      : setSelectedUsers([...selectedUsers, id]);
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      let temp = [];
      currentPageUsers.map((user) => {
        temp.push(user.id);
        return user;
      });
      setSelectedUsers(temp);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleDeleteAll = () => {
    const tempUser = userData.filter((user) =>
      selectedUsers.includes(user.id) ? false : true
    );
    setUserData(tempUser);
    document.getElementById("select-all").checked = false;
    setSelectedUsers([]);
    if (
      currentPage === Math.ceil(userData.length / usersPerPage) &&
      currentPage > 1
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fetchCurrentUsers = () => {
    //Calculating the user rows
    const lastUserId = currentPage * usersPerPage;
    const firstUserId = lastUserId - usersPerPage;
    const currentUsers =  userData.filter((user) =>{
                            return keys.some((key) => {
                              return user[key].toLowerCase().includes(searchQuery.toLowerCase())
                            })
                          });
    setCurrentUserCount(currentUsers.length);
    setCurrentPageUsers(currentUsers.slice(firstUserId, lastUserId) || []);
    if(searchQuery.length > 0) setCurrentPage(1);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        selectedUsers,
        setSelectedUsers,
        usersPerPage,
        currentPageUsers,
        setCurrentPageUsers,
        handleEdit,
        handleDelete,
        handleCheckbox,
        handleSelectAll,
        handleDeleteAll,
        fetchCurrentUsers,
        editingUserID,
        setEditingUserID,
        currentUserCount,
        setCurrentUserCount
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
