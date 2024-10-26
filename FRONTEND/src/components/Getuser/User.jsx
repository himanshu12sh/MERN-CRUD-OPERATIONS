import { FaUserEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getAll');
      setUsers(response.data.userData);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/delete/${userId}`);
      console.log(response);
      setUsers((prevData) => prevData.filter((user) => user._id !== userId)); 
      if (response.status == 201) {
        toast.success(response.data.message, { position: "center" });
        navigate('/')
    } 
      console.log("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err.message);
    }
  };
  

  return (
    <>
      <center><h1>Showing The User Data!..</h1></center>
      <div className="container my-5">
        <div className="Add">
          <NavLink to="addUser" className="btn btn-info btn-sm">
            <IoPersonAddSharp /> Add User
          </NavLink>
        </div>
        <table className="table table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td className="d-flex justify-content-between align-items-center">
                  <NavLink to={`/`} className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>
                    <MdDeleteForever /> Delete
                  </NavLink>
                  <NavLink to={`/updateUser/` + user._id} className="btn btn-warning btn-sm">
                    <FaUserEdit className="me-1" /> Update
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;
