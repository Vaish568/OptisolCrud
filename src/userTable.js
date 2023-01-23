import React from "react";
import { Link } from "react-router-dom";
import deleteUser from "./crud/deleteUser";
import "./Form.css";
const UserTable = ({ user, handleDelete }) => {
  const { firstName, email, phoneNumber, _id } = user;

  // const handleDelete = () => {
  //   if (window.confirm("Are you sure?")) deleteUser(_id);
  // };
  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>
          <Link to={`${_id}`}>
            <button className="ed">Edit</button>
          </Link>
        </td>
        <td>
          <button
            onClick={(e) => handleDelete(_id)}
            className="ed"
            style={{ background: "#f00" }}
          >
            Delete
          </button>
        </td>
        <td>
          <Link to={`/${_id}`}>
            <button
              className="ed"
              style={{ background: "#000" }}
              data-toggle="modal"
              data-target="#viewModal"
            >
              View
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
