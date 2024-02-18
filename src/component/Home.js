import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const alldata = () => {
    axios
      .get(`http://localhost:3001/posts`)
      .then((res) => {
        setData(res.data);
        setSearch(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    alldata();
  }, []);
  const navigate = useNavigate();

  function handeldelete(id) {
    const confirm = window.confirm("would you like delete");
    if (confirm) {
      axios
        .delete(`http://localhost:3001/posts/` + id)
        .then((res) => {
          navigate("/");
          alldata();
        })
        .catch((err) => console.log(err));
    }
  }

  const filter = (e) => {
    setSearch(
      data.filter((f) => f.name.toLowerCase().includes(e.target.value))
    );
  };
  return (
    <div>
      <h1>List Of Users</h1>
      <div>
        <div className="search">
          <input
            type="text"
            className="input leftinput"
            placeholder="Search"
            onChange={filter}
          />

          <Link to="/create">
            <button className="btn">Add +</button>
          </Link>
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link to={`/read/${item.id}`}>
                    <button className="btn">Read</button>
                  </Link>

                  <Link to={`/update/${item.id}`}>
                    <button className="btn">Edit</button>
                  </Link>
                  <Link to={`/delete/${item.id}`}>
                    <button
                      className="btn btn-red"
                      onClick={(e) => handeldelete(item.id)}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
