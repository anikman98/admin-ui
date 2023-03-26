import { createContext, useState, useContext } from "react";
import { PaginationContext } from "./PaginationContext";

export const UserContext = createContext();

const UserState = (props) => {

      const [userData, setUserData] = useState([]);
      const [selectedUsers, setSelectedUsers] = useState([]);
      const usersPerPage = 10;
      const [currentPageUsers, setCurrentPageUsers] = useState([]);

    const { currentPage, setCurrentPage } = useContext(PaginationContext);


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
          //Calculating the user ids
          const lastUserId = currentPage * usersPerPage;
          const firstUserId = lastUserId - usersPerPage;
          setCurrentPageUsers(userData.slice(firstUserId, lastUserId) || []);
        };

    return (
      <UserContext.Provider
        values={{
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
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
}

export default UserState;