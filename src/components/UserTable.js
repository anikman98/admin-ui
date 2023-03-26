import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserRow from "./UserRow";

const UserTable = () => {

  const {currentPageUsers, handleSelectAll} = useContext(UserContext);


  return (
    <div className="user-table">
      {currentPageUsers ? (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="select-all"
                  id="select-all"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPageUsers.map((user) => {
              return <UserRow user={user} key={user.id} />;
            })}
          </tbody>
        </table>
      ) : (
        "No data"
      )}
    </div>
  );
};

export default UserTable;
