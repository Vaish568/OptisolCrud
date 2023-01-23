import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchUserById from "./crud/fetchUserById";
import updateUser from "./crud/updateUser";

const SingleUser = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState();
  const { id } = useParams();
  console.log("user is", user?.firstName);
  useEffect(() => {
    callfetchUserById();
  }, []);
  const navigate = useNavigate();
  const callfetchUserById = async () => {
    fetchUserById(id)
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log("Error is ", error);
        setError(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, user).then((data) => {
      if (data) {
        navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <h1>Edit/View details</h1>
      {user !== "undefined" ? (
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
                value={user?.firstName?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
              <input
                type="text"
                className="input-name"
                placeholder="Last"
                value={user?.lastName?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
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
              value={user?.email?.toString()}
              placeholder="E-mail"
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          </div>
          <div className="clearfix"></div>

          <div className="form-group" style={{ height: "70px" }}>
            <label className="reg_txt">
              Phone Number <span>*</span>
            </label>
            <div className="clearfix"></div>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="Phone"
              value={user?.phoneNumber?.toString()}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                });
              }}
            />
          </div>
          <div className="clearfix"></div>
          <div className="form-group">
            <label className="reg_txt">
              Address <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text"
              id=""
              value={user?.address1?.toString()}
              placeholder="Line 1"
              style={{ marginBottom: "15px" }}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, address1: e.target.value };
                });
              }}
            />
            <input
              type="text"
              className="form-register text"
              value={user?.address2?.toString()}
              id=""
              placeholder="Line 2"
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, address2: e.target.value };
                });
              }}
            />
          </div>

          <div className="form-group">
            <div className="controls form-inline">
              <input
                type="text"
                className="input-name"
                placeholder="City"
                value={user?.city?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, city: e.target.value };
                  });
                }}
              />
              <input
                type="text"
                className="input-name"
                placeholder="State"
                value={user?.state?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, state: e.target.value };
                  });
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="controls form-inline w-100">
              <input
                type="text"
                className="input-name"
                placeholder="Zip Code"
                value={user?.zipCode?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, zipCode: e.target.value };
                  });
                }}
              />
              <input
                type="text"
                className="input-name"
                placeholder="Country"
                value={user?.country?.toString()}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, country: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="reg_txt">
              Write Your qualification <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder=""
              value={user?.qualification?.toString()}
              style={{ marginBottom: "15px" }}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, qualification: e.target.value };
                });
              }}
            />
            {/* <!-- <input type="text" className="form-register text" id="" placeholder="Add your qualification"> <span><img alt="" src="images/plus.png" className="add"></span> --> */}
          </div>

          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Comment <span>*</span>
            </label>
            <textarea
              className="form-register text"
              value={user?.comments?.toString()}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, comments: e.target.value };
                });
              }}
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
      ) : (
        <h1>error while loading</h1>
      )}
    </div>
  );
};

export default SingleUser;
