import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [value, setValue] = useState({
    name: "",
    username: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/` + id)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  function Update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/posts/` + id, value)
      .then((res) => console.log(res));
    // .catch((err) => console.log(err));
    navigate("/");
  }
  return (
    <div>
      <h1>Edit Details</h1>
      <form onSubmit={Update} className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="username">UserName:</label>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Name"
            value={value.username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            className="input"
            type="text"
            name="title"
            id="title"
            placeholder="Name"
            value={value.title}
            onChange={(e) => setValue({ ...value, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Author:</label>
          <input
            className="input"
            type="text"
            name="author"
            id="author"
            placeholder="Name"
            value={value.author}
            onChange={(e) => setValue({ ...value, author: e.target.value })}
          />
        </div>
        <div>
          <button className="btn">Update</button>
          <Link to="/">
            <button className="btn">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
