import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../App.css';

const UserRow = ({ user }) => {
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userRole, setUserRole] = useState(user.role);

  const {
    userData,
    setUserData,
    selectedUsers,
    handleCheckbox,
    handleDelete,
    editingUserID,
    setEditingUserID,
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => {
      return prev.map((user) => {
        if (user.id === editingUserID) {
           user.name = userName;
           user.email = userEmail;
           user.role = userRole;
        }
        return user;
      });
    });
    setEditingUserID(null);
    console.log("from userRow" + userData);
  };

  return (
    <tr key={user.id} className={selectedUsers.includes(user.id) ? "user-row selected" : "user-row"}>
      <td>
        <input
          type="checkbox"
          name={user.id}
          checked={selectedUsers.includes(user.id)}
          onChange={() => handleCheckbox(user.id)}
        />
      </td>
      {user.id === editingUserID ? (
        //the user editing row
        <>
          <td>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            />
          </td>
          <td>
            <button className="edit" onClick={(e) => handleSubmit(e)}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
              </svg>
            </button>
            <button className="delete" onClick={() => handleDelete(user.id)}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M18.693,3.338h-1.35l0.323-1.834c0.046-0.262-0.027-0.536-0.198-0.739c-0.173-0.206-0.428-0.325-0.695-0.325
                                    H3.434c-0.262,0-0.513,0.114-0.685,0.312c-0.173,0.197-0.25,0.46-0.215,0.721L2.79,3.338H1.307c-0.502,0-0.908,0.406-0.908,0.908
                                    c0,0.502,0.406,0.908,0.908,0.908h1.683l1.721,13.613c0.057,0.454,0.444,0.795,0.901,0.795h8.722c0.458,0,0.845-0.34,0.902-0.795
                                    l1.72-13.613h1.737c0.502,0,0.908-0.406,0.908-0.908C19.601,3.744,19.195,3.338,18.693,3.338z M15.69,2.255L15.5,3.334H4.623
                                    L4.476,2.255H15.69z M13.535,17.745H6.413L4.826,5.193H15.12L13.535,17.745z"
                ></path>
              </svg>
            </button>
          </td>
        </>
      ) : (
        //the normal row
        <>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button className="edit" onClick={() => setEditingUserID(user.id)}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
                ></path>
              </svg>
            </button>
            <button className="delete" onClick={() => handleDelete(user.id)}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M18.693,3.338h-1.35l0.323-1.834c0.046-0.262-0.027-0.536-0.198-0.739c-0.173-0.206-0.428-0.325-0.695-0.325
                                  H3.434c-0.262,0-0.513,0.114-0.685,0.312c-0.173,0.197-0.25,0.46-0.215,0.721L2.79,3.338H1.307c-0.502,0-0.908,0.406-0.908,0.908
                                  c0,0.502,0.406,0.908,0.908,0.908h1.683l1.721,13.613c0.057,0.454,0.444,0.795,0.901,0.795h8.722c0.458,0,0.845-0.34,0.902-0.795
                                  l1.72-13.613h1.737c0.502,0,0.908-0.406,0.908-0.908C19.601,3.744,19.195,3.338,18.693,3.338z M15.69,2.255L15.5,3.334H4.623
                                  L4.476,2.255H15.69z M13.535,17.745H6.413L4.826,5.193H15.12L13.535,17.745z"
                ></path>
              </svg>
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default UserRow;
