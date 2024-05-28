import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Home.css"; // Assuming you have a CSS file for additional styles

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the users!", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/user/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Watchlist</h2>
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary btn-sm mx-1" to={`/viewmovie/${user.id}`}>
                  View
                </Link>
                <Link className="btn btn-outline-primary btn-sm mx-1" to={`/editmovie/${user.id}`}>
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
