import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const UpdateUser = () => {
  const initialUser = {
    fname: "",
    lname: "",
    email: "",
  };

  const { id } = useParams();
  const [user, setUser] = useState(initialUser);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/getOne/${id}`);
      console.log(data)
      setUser(data.userExist); 
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.put(`http://localhost:4000/api/update/${id}`, user);
      console.log(response);
      // Optionally redirect or show a success message
    } catch (err) {
      console.error("Error updating user:", err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="container mt-5">
      <NavLink to="/">
        <button type="button" className="btn btn-danger w-10 mt-4">
          Go Back
        </button>
      </NavLink>
      <h2 className="text-center mb-4">Update Details</h2>
      <form className="border p-4 shadow-sm rounded" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            onChange={handleInput}
            name="fname"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={user.lname}
            onChange={handleInput}
            name="lname"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={handleInput}
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  );
};
export default UpdateUser