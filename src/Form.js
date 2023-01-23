import React, { useEffect, useState } from "react";
import fetchAllUsers from "./crud/fetchAllUsers";
import UserTable from "./userTable";
import "./Form.css";
import createUser from "./crud/createUser";
import deleteUser from "./crud/deleteUser";

const initialData = {
  firstName: null,
  lastName: null,
  email: "",
  phoneNumber: "",
};

const Form = () => {
  const [error, setError] = useState({});
  const [userData, setUserData] = useState(initialData);
  const [successCreate, setSuccessCreate] = useState();
  const [successDelete, setSuccessDelete] = useState();
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    console.log("useeffect runs");
    callFetchUsers();
  }, [successCreate, successDelete]);

  const callFetchUsers = async () => {
    fetchAllUsers()
      .then((data) => setAllUsers(data))
      .catch((error) => console.log(error));
  };
  console.log("got data:", allUsers);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = validateDetails(userData);
    setError(err);
    if (Object.keys(err).length === 0) {
      createUser(userData)
        .then((data) => setSuccessCreate(data))
        .catch((error) => console.log("error while creating", error));
      setUserData();
    }
  };
  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure?"))
      deleteUser(_id)
        .then((data) => setSuccessDelete(data))
        .catch((err) => setSuccessDelete(false));
  };

  return (
    <div className="container">
      <div className="register col-md-5 col-sm-6">
        <h1 className="title">
          <strong>BIO DATA</strong>
        </h1>
        <form role={"form"} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="reg_txt">
              Name <span>*</span>
            </label>
            <div className="controls form-inline">
              <input
                type="text"
                className="input-name"
                placeholder="First"
                value={userData?.firstName}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
              />
              <input
                type="text"
                className="input-name"
                placeholder="Last"
                value={userData?.lastName}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
              />
              <p style={{ color: "red", fontSize: "13px" }}>{error?.name}</p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="form-group">
            <label className="reg_txt">
              Email <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text "
              id=""
              placeholder="E-mail"
              value={userData?.email}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
            <p style={{ color: "red", fontSize: "13px" }}>{error?.email}</p>
          </div>
          <div className="clearfix"></div>

          <div className="form-group" style={{ height: "70px" }}>
            <label className="reg_txt">
              Phone Number <span>*</span>
            </label>
            <div className="clearfix"></div>
            <input
              type="tel"
              className="form-register text"
              id=""
              placeholder="Phone"
              value={userData?.phoneNumber}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                })
              }
            />
            <p style={{ color: "red", fontSize: "13px" }}>
              {error.phoneNumber}
            </p>
          </div>
          <div className="clearfix"></div>
          <div className="form-group" style={{ marginTop: "15px" }}>
            <label className="reg_txt">Address</label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="Line 1"
              style={{ marginBottom: "15px" }}
              value={userData?.address1}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, address1: e.target.value };
                })
              }
            />
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="Line 2"
              value={userData?.address2}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, address2: e.target.value };
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="controls form-inline">
              <input
                type="text"
                className="input-name"
                placeholder="City"
                value={userData?.city}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, city: e.target.value };
                  })
                }
              />
              <input
                type="text"
                className="input-name"
                placeholder="State"
                value={userData?.state}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, state: e.target.value };
                  })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="controls form-inline w-100">
              <input
                type="text"
                className="input-name"
                placeholder="Zip Code"
                value={userData?.zipCode}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, zipCode: e.target.value };
                  })
                }
              />
              <input
                type="text"
                className="input-name"
                placeholder="Country"
                value={userData?.country}
                onChange={(e) =>
                  setUserData((prev) => {
                    return { ...prev, country: e.target.value };
                  })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label className="reg_txt">Write Your qualification</label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder=""
              style={{ marginBottom: "15px" }}
              value={userData?.qualification}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, qualification: e.target.value };
                })
              }
            />
            {/* <!-- <input type="text" className="form-register text" id="" placeholder="Add your qualification"> <span><img alt="" src="images/plus.png" className="add"></span> --> */}
          </div>

          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">Comment</label>
            <textarea
              className="form-register text"
              value={userData?.comments}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, comments: e.target.value };
                })
              }
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-secondary submit"
              style={{ width: "97%" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6 tabt">
        <table className="table">
          <tbody>
            <tr className="ztxt">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
            {allUsers?.map((user) => (
              <UserTable
                key={user._id}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
const validateDetails = (values) => {
  console.log("Calleddddd", values);
  const error = {};
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // let regexPhone =
  //   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  // if (!values.fistName) {
  //   error.name = "fullname is required!";
  // }
  // if (!values.lastName) {
  //   error.name = "fullname is required!";
  // }
  if (!values.email) {
    console.log("email is empty");
    error.email = "Email is required!";
  } else if (!regexEmail.test(values.email)) {
    error.email = "Enter a valid email";
  }
  if (!values.phoneNumber) {
    error.phoneNumber = "Contact number is required!";
  }
  //else if (!regexPhone.test(values.phone)) {
  //   error.phoneNumber = "Enter a valid number";
  // }

  return error;
};
