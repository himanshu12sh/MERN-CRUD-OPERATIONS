import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function AddUser() {

 const navigate=useNavigate() 
  const userInfo = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userInfo);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // console.log(user)
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:4000/api/create",
        user
      );
      if (response.status == 201) {
        toast.success(response.data.message, { position: "center" });
        navigate('/')

      }
    } catch (err) {
      toast.success(response.data.message, { position: "top-right" });
    }
  };
  return (
    <div className="container mt-5">
      <NavLink to="/">
        <button type="text" className="btn btn-danger w-10 mt-4">
          Go Back
        </button>
      </NavLink>
      <h2 className="text-center mb-4">Register</h2>
      <form className="border p-4 shadow-sm rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="fname"
            onChange={inputHandle}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lname"
            onChange={inputHandle}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={inputHandle}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={inputHandle}
            placeholder="Enter a password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
